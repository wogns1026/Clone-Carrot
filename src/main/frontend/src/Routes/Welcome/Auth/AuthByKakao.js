import { ImageButton } from "Components/Universal";
import KakaoLogin from "react-kakao-login";
import signin_btn from "images/kakao_signin_btn.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthByKakao = ({ callback }) => {
  const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  const authentication = (payload) => {
    // const { email } = payload.profile.kakao_account;
    callback({ authSuccess: true, id: payload.profile.id, authType: "kakao" });
  };

  return (
    <>
      <KakaoLogin
        token={API_KEY}
        buttonText="kakao"
        onSuccess={authentication}
        onFail={(e) => toast.error("로그인 실패")}
        onLogout={() => toast.error("로그아웃 성공")}
        render={({ onClick }) => (
          <ImageButton src={signin_btn} onClick={onClick} />
        )}
      ></KakaoLogin>
      <ToastContainer />
    </>
  );
};
export default AuthByKakao;
