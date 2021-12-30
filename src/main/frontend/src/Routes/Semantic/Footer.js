import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "images/logo.svg";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import ContentContainer from "Components/Content/ContentContainer";
import {
  FlexBox,
  Box,
  Text,
  HorizontalDivider,
  RegularGrid,
  ColumnAssignGrid,
  LazyImage,
} from "Components/Universal";
import { icons, contactInfo, getFooterData } from "api";
import theme from "Style/theme";

const Info = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGrey};
`;
const Footer = () => {
  const [footerData, setfooterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const textColor = theme.colors.Grey;
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFooterData();
        setfooterData(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message text={error} />
  ) : (
    <ContentContainer
      bgColor={`${theme.colors.deepDarkgrey}`}
      direction="column"
      height="100%"
    >
      <Box width="100%" verticalMargin="85px">
        <FlexBox>
          <Box width="170px" height="100%">
            <LazyImage src={logo} size="100%" />
          </Box>

          <Box width="100%" marginLeft="85px" marginTop="20px">
            <RegularGrid gridSize="150px" gridGap="50px">
              {footerData.map((data, index) => (
                <FlexBox key={new Date().getTime() + index} column gap="20px">
                  {data.map(({ text }) => (
                    <Text
                      key={text}
                      to="/"
                      fontWeight={600}
                      color={theme.colors.lightGrey}
                      whiteSpace="pre-wrap"
                    >
                      {text}
                    </Text>
                  ))}
                </FlexBox>
              ))}
            </RegularGrid>
          </Box>
        </FlexBox>

        <HorizontalDivider marginTop="10px" marginBottom="35px" />
        <Info>
          <FlexBox column>
            <Box width="450px">
              <ColumnAssignGrid colSize={2}>
                {contactInfo.map(({ text, address }, index) => (
                  <FlexBox key={index}>
                    <Text color={textColor}>{text}</Text>
                    <span>{address}</span>
                  </FlexBox>
                ))}
              </ColumnAssignGrid>
            </Box>

            <Box verticalMargin="20px">
              <Text whiteSpace="wrap">
                서울특별시 구로구 디지털로30길 28, 609호 (당근서비스) 사업자
                등록번호 : 375-87-00088 직업정보제공사업 신고번호 :
                J1200020200016
              </Text>
            </Box>

            <Box verticalMargin="15px">
              <RegularGrid gridSize="25px" gridGap="25px">
                {[icons.facebook, icons.instagram, icons.blog].map(
                  (icon, index) => (
                    <LazyImage key={index} src={icon} size="25px" alt="icon" />
                  )
                )}
                <Text
                  color={textColor}
                  underline="underline"
                  whiteSpace="pre-wrap"
                >
                  한국
                </Text>
              </RegularGrid>
            </Box>
            <Text>©Danggeun Market Inc.</Text>
          </FlexBox>
        </Info>
      </Box>
    </ContentContainer>
  );
};
export default Footer;
