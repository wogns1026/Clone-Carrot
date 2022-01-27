const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
export default usePreventLeave;
// const example = () => {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>Unprotect</button>
//     </div>
//   );
// };
