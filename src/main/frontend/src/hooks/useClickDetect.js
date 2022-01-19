import { useEffect } from "react";

function useClickDetect(ref, exceptref, onClickedInside, onClickedOutside) {
  /*
   * ref : 감지 대상 (이 컴포넌트를 기준으로 mouseclick 감지)
   * exceptRef : 감지 제외 대상 (이 컴포넌트를 클릭해도 무시)
   * onClickedInside : ref 컴포넌트 내부 요소 클릭
   * onClickedOutside : ref 컴포넌트 외부 요소 클릭
   */
  function handleClickOutside(event) {
    if (exceptref.current && exceptref.current.contains(event.target)) {
      return;
    }
    if (ref.current && !ref.current.contains(event.target)) {
      onClickedOutside();
    } else {
      onClickedInside();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
export default useClickDetect;
