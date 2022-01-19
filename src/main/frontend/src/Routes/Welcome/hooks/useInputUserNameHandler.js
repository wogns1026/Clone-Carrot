import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useInputUserNameHandler = () => {
  const [userName, setUserName] = useState("");
  const [valid, setValid] = useState(false);

  const submitUserName = () => {
    if (userName && userName.length >= 2 && userName.length <= 8) {
      setValid(true);
    } else {
      toast.warning("사용할 수 없는 닉네임 입니다.");
    }
  };
  useEffect(() => setValid(false), [userName]);

  return { userName, setUserName, valid, submitUserName };
};
