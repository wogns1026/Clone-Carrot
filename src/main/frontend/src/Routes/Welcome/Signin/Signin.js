import React from "react";
import WelcomeContainer from "../WelcomeContainer";
import AuthByPhoneNumber from "../Auth/AuthByPhoneNumber";
import AuthByGoogle from "../Auth/AuthByGoogle";
import WelcomeTitle from "../WelcomeTitle";
import { FlexBox } from "Components/Universal";
import AuthByKakao from "../Auth/AuthByKakao";
import { useDispatch } from "react-redux";
import { login } from "redux/modules/sellerInfo";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const request = ({ id, authType }) => {
    console.log(`인증방식: ${authType}, ID: ${id}`);

    // 로그인 요청을 해서 response 를 받았다고 가정
    const response = { userId: 1, accessToken: "1", refreshToken: "1" };
    navigate("/");
  };

  return (
    <WelcomeContainer>
      <WelcomeTitle />
      <AuthByPhoneNumber callback={request} />
      <FlexBox column center>
        <AuthByGoogle callback={request} />
        <AuthByKakao callback={request} />
      </FlexBox>
    </WelcomeContainer>
  );
};

export default Signin;

// import { connect } from "react-redux";
// import { login } from "store";
// import Signin from "./Signin";

// const mapStateToProps = (state) => {
//   // → 여기서 ownProps는 빼도된다.
//   const { userId, accessToken, refreshToken } = state;
//   return { userId, accessToken, refreshToken };
//   // → 이 return 값이 컴포넌트의 props로 추가된다.
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     Login: (userId, accessToken, refreshToken) =>
//       dispatch(login({ userId, accessToken, refreshToken })),
//   };
//   //→ add는 store.js에서 가져온 함수
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Signin);
