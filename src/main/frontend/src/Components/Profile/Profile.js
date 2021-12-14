import React from "react";
import styled from "styled-components";
import defaultImg from "images/logo.svg";
import { Link } from "react-router-dom";
import ProgressBar from "Components/Universal/ProgressBar";
const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 11px 0;
`;
const ProfileLeftSide = styled.div`
  display: flex;
`;
const ProfileRightSide = styled.div`
  display: flex;
  height: 100%;
  color: ${(props) => props.color};
  padding-top: 19px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center center;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 7px;
`;
const Name = styled.div`
  width: 100%;
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 700;
`;
const Location = styled.div`
  font-size: 13px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  justify-content: ${(props) => props.justify | "center"};
  align-items: ${(props) => props.align};
`;
const TemperBox = styled(Box)`
  padding: 5px 11px 9px 0;
`;
const MannerTemper = styled.span`
  padding-bottom: 7px;
  font-size: 15px;
  font-weight: 700;
`;
const Face = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid green;
  background-size: cover;
  background-position: center center;
  margin-top: 3px;
`;
const MannerText = styled.div`
  font-size: 11.5px;
  color: grey;
`;

const Profile = ({ id, imgUrl = defaultImg, name, location, mannerTemper }) => {
  return (
    <Link
      to={{
        pathname: `/profile/${id}`,
        state: { id, imgUrl, name, location, mannerTemper },
      }}
    >
      <ProfileContainer>
        <ProfileLeftSide>
          <Image bgUrl={imgUrl} alt="사용자이미지" />
          <ProfileInfo>
            <Name>{name}</Name>
            <Location>{location}</Location>
          </ProfileInfo>
        </ProfileLeftSide>
        <ProfileRightSide color={"#319e45"}>
          <Box dir={"column"} align={"flex-end"}>
            <Box dir={"row"}>
              <TemperBox dir={"column"} align={"flex-end"}>
                <MannerTemper>{`${mannerTemper} °C`}</MannerTemper>
                <ProgressBar
                  height={"4px"}
                  percent={mannerTemper}
                  progressColor={"#319e45"}
                />
              </TemperBox>
              <Face bgUrl={defaultImg}></Face>
            </Box>
            <MannerText>{`매너온도`}</MannerText>
          </Box>
        </ProfileRightSide>
      </ProfileContainer>
    </Link>
  );
};

export default Profile;
