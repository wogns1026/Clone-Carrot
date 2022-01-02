import { useState } from "react";
import SendAuthCode from "./SendAuthCode";
import SendPhonNumber from "./SendPhoneNumber";

const AuthPhoneNumber = () => {
  const [sendAuthCode, setSendAuthCode] = useState(false);
  const [authState, setAuthState] = useState(false);

  return (
    <>
      <SendPhonNumber callback={setSendAuthCode} />
      {sendAuthCode && <SendAuthCode callback={setAuthState} />}
    </>
  );
};
export default AuthPhoneNumber;
