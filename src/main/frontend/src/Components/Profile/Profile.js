import React from "react";
import { FlexBox, LinkTo } from "Components/Universal";
import ProfileUserinfo from "./ProfileUserInfo";
import MannerTemper from "./MannerTemper";
import Loader from "Components/Loading/Loader";
import { useFetchSellerInfoById } from "./hooks/useFetchSellerInfoById";

const Profile = ({ id }) => {
  const { loading, sellerInfo } = useFetchSellerInfoById(id);

  return !id || loading ? (
    <Loader />
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
          id={sellerInfo.userId}
          name={sellerInfo.userName}
          address={sellerInfo.address}
        />
        <MannerTemper
          id={sellerInfo.userId}
          mannerTemper={sellerInfo.mannerTemper}
        />
      </FlexBox>
    </LinkTo>
  );
};

export default Profile;
