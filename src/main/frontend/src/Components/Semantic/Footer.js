import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "images/logo.svg";
import { getFooterData } from "api";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import { LazyIcon } from "Components/Universal/Image";
import { RegularGrid, ColumnAssignGrid } from "Components/Universal/Grid";

import {
  FlexBox,
  Box,
  TextContent,
  HorizontalDivider,
  ContentContainer,
} from "Components/Universal";

import { icons, contactInfo } from "api";
import theme from "Style/theme";

const Link = styled.div`
  width: 100%;
  margin-left: 85px;
  margin-top: 20px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkGrey};
`;
const Footer = () => {
  const [footerData, setfooterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
            <LazyIcon src={logo} size="100%" />
          </Box>

          <Link>
            <RegularGrid gridSize="150px" gridGap="50px">
              {footerData.map((data, index) => (
                <FlexBox key={index} dir="column" gap="20px">
                  {data.map(({ text }) => (
                    <TextContent to="/" fontWeight={600} color="white">
                      {text}
                    </TextContent>
                  ))}
                </FlexBox>
              ))}
            </RegularGrid>
          </Link>
        </FlexBox>

        <HorizontalDivider marginTop="10px" marginBottom="35px" />

        <Info>
          <Box width="450px">
            <ColumnAssignGrid colSize={2}>
              {contactInfo.map(({ text, address }, index) => (
                <FlexBox key={index}>
                  <TextContent color={theme.colors.grey}>{text}</TextContent>
                  <span>{address}</span>
                </FlexBox>
              ))}
            </ColumnAssignGrid>
          </Box>

          <Box verticalMargin="20px">
            <TextContent whiteSpace="wrap">
              서울특별시 구로구 디지털로30길 28, 609호 (당근서비스) 사업자
              등록번호 : 375-87-00088 직업정보제공사업 신고번호 : J1200020200016
            </TextContent>
          </Box>

          <Box verticalMargin="15px">
            <RegularGrid gridSize="25px" gridGap="25px">
              {[icons.facebook, icons.instagram, icons.blog].map(
                (icon, index) => (
                  <LazyIcon key={index} src={icon} size="25px" alt="icon" />
                )
              )}
              <TextContent color={theme.colors.grey} underline="underline">
                한국
              </TextContent>
            </RegularGrid>
          </Box>
          <TextContent>©Danggeun Market Inc.</TextContent>
        </Info>
      </Box>
    </ContentContainer>
  );
};
export default Footer;
