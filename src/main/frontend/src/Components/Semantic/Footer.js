import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "images/logo.svg";
import { getFooterData } from "api";
import ContentContainer from "../Universal/ContentContainer";
import LinkContentList from "Components/Universal/LinkContentList";
import Loader from "Components/Loading/Loader";

const Container = styled.footer`
  width: 100%;
  height: 100%;
  padding: 80px 0;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;
const Image = styled.img`
  background-size: cover;
  background-position: center center;
  margin-right: 95px;
  max-height: 45px;
`;
const Link = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  opacity: 0.1;

  margin-top: 60px;
  margin-bottom: 35px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  gap: 10px;
`;
const Title = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;
const IconContainer = styled.div`
  display: flex;
  gap: 25px;
  margin: 25px 0;
`;
const Icon = styled.img`
  background-size: cover;
  background-position: center center;
  max-height: 25px;
`;
const Address = styled.span`
  margin-top: 10px;
`;
const Footer = () => {
  const [footerData, setfooterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFooterData();
        setfooterData(data);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
      }
    };
    getData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <ContentContainer
      bgColor="#495057"
      direction="column"
      height="550px"
      component={
        <Container>
          <Nav>
            <Image src={logo} alt="메인로고" />
            <Link>
              <LinkContentList content={footerData} />
            </Link>
          </Nav>
          <HorizontalLine />
          <Info>
            <div>
              <Title>{`고객문의`}</Title>
              <span>{`cs@daangnservice.com`}</span>
              <Title>{`제휴문의`}</Title>
              <span>{`contact@daangn.com`}</span>
            </div>

            <div>
              <Title>{`지역광고`}</Title>
              <span>{`ad@daangn.com`}</span>
              <Title>{`PR문의`}</Title>
              <span>{`pr@daangn.com`}</span>
            </div>

            <Address>{`서울특별시 구로구 디지털로30길 28, 609호 (당근서비스) 사업자 등록번호 : 375-87-00088 직업정보제공사업 신고번호 : J1200020200016`}</Address>
            <IconContainer>
              <Icon
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg"
                alt="facebook"
              />
              <Icon
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg"
                alt="instagram"
              />
              <Icon
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg"
                alt="blog"
              />
              <Title>한국</Title>
            </IconContainer>
            <span>{`©Danggeun Market Inc.`}</span>
          </Info>
        </Container>
      }
    ></ContentContainer>
  );
};
export default Footer;
