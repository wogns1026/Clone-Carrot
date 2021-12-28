import React from "react";
import { FlexBox, LinkTo } from "Components/Universal";
import ProfileUserinfo from "./ProfileUserInfo";
import MannerTemper from "./MannerTemper";
import defaultImg from "images/logo.svg";

const Profile = ({ id, src = defaultImg, name, location, mannerTemper }) => {
  return (
    <LinkTo to={{ pathname: `/profile/${id}` }}>
      <FlexBox
        width="100%"
        spaceBetween
        flexAlign="center"
        marginTop="14px"
        marginBottom="11px"
      >
        <ProfileUserinfo id={id} src={src} name={name} location={location} />
        <MannerTemper id={id} mannerTemper={mannerTemper} />
      </FlexBox>
    </LinkTo>
  );
};

export default Profile;
