import { ImageButton } from "Components/Universal";
import { authByGoogle } from "Firebase/Auth/google";
import signin_btn from "images/google_signin_btn.png";

const AuthByGoogle = ({ callback }) => {
  const authentication = (payload) => {
    if (payload.authSuccess) {
      callback(payload);
    }
  };

  return (
    <ImageButton
      src={signin_btn}
      onClick={() => authByGoogle(authentication)}
    />
  );
};
export default AuthByGoogle;
