import React from "react";
import { FlexBox, LinkTo } from "Components/Universal";
import ProfileUserinfo from "./ProfileUserInfo";
import MannerTemper from "./MannerTemper";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { userApi } from "api";

const Profile = ({ id }) => {
  let { loading, data, error } = userApi.GetUser(id);

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
          id={data.sellerInfo?.userId}
          name={data.sellerInfo?.userName}
          address={data.sellerInfo?.address}
        />
        <MannerTemper
          id={data.sellerInfo?.userId}
          mannerTemper={data.sellerInfo?.mannerTemper}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default Profile;
