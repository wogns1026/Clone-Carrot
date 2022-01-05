import { FlexBox } from "Components/Universal";
import { useState } from "react";
import SendAuthCode from "./SendAuthCode";
import SendPhoneNumber from "./SendPhoneNumber";

const AuthByPhoneNumber = ({ callback }) => {
  const [valid, setValid] = useState(false);

  return (
    <FlexBox column gap="5px">
      <SendPhoneNumber valid={valid} setValid={setValid} />
      {valid && <SendAuthCode callback={callback} />}
    </FlexBox>
  );
};
export default AuthByPhoneNumber;
