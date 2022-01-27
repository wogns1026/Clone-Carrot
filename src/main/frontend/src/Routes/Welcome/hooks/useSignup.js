import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup, userInfoSelector } from "redux/modules/user";

export const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(userInfoSelector);
  const modify = ({ ...rest }) => {
    dispatch(signup({ ...userInfo, ...rest }))
      .unwrap()
      .then((res) => {
        if (!res.userName || !res.address) {
          alert("오류 발생! 다시 유저 정보를 입력해 주세요!");
          navigate("/signup");
        } else {
          toast.success("회원가입 완료");
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return { modify };
};
