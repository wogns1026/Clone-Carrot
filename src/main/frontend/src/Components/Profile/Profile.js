import React, { useEffect, useState } from "react";
import { FlexBox, LinkTo } from "Components/Universal";
import ProfileUserinfo from "./ProfileUserInfo";
import MannerTemper from "./MannerTemper";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { UserAPI } from "api";

const Profile = ({ id }) => {
  let { loading, data, error } = UserAPI(id);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (data) setState(data.sellerInfo);
  }, [data]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <LinkTo to={`/seller-info/${id}`}>
      <FlexBox
        width="100%"
        spaceBetween
        flexAlign="center"
        marginTop="14px"
        marginBottom="11px"
      >
        <ProfileUserinfo
          id={state.userId}
          name={state.userName}
          address={state.address}
        />
        <MannerTemper id={state.userId} mannerTemper={state.mannerTemper} />
      </FlexBox>
    </LinkTo>
  );
};

export default Profile;
