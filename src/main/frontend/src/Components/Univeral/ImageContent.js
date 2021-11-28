import styled from "styled-components";

const Image = styled.img`
  background-size: cover;
  background-position: center center;
  max-width: 512px;
`;

const ImageContent = ({ imgSrc }) => {
  return imgSrc ? <Image src={imgSrc} alt="이미지" /> : "";
};
export default ImageContent;
