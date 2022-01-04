const { useState, useEffect } = require("react");

export const useAutoDashInput = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (input.length === 10) {
      setInput(input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (input.length === 13) {
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [input]);
  return [input, setInput];
};
