import React from "react";
import DaumPostCode from "react-daum-postcode";
import theme from "styles/theme";

const PostCode = ({ callback }) => {
  const width = "100%";
  const height = "500px";
  const builtInStyle = {
    width,
    height,
  };
  const modalStyle = {
    position: "absolute",
    width: width,
    height: height,
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
    zIndex: "100",
    border: "1px solid #000000",
    overflow: "hidden",
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") extraAddress += data.bname;

      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    callback(fullAddress);
  };

  return (
    <DaumPostCode
      style={builtInStyle}
      theme={{ bgColor: theme.colors.carrot }}
      onComplete={handleComplete}
    />
  );
};
export default PostCode;
