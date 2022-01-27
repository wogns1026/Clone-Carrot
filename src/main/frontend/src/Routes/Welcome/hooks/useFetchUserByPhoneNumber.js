import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchUserByPhoneNumber } from "redux/modules/user";

export const useFetchUserByPhoneNumber = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = (id) => {
    dispatch(fetchUserByPhoneNumber(id))
      .unwrap()
      .then((res) => {
        if (!res.userName || !res.address) {
          alert("최초 로그인 했습니다. 유저 정보를 입력해 주세요!");
          navigate("/signup", { state: { ...res } });
        } else {
          toast.success("로그인 성공");
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return { signin };
};
