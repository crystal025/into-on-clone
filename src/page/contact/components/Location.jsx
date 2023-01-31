import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Location = ({ position, setPosition }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <MapTitle>DESIGN STUDIO & SEOUL OFFICE</MapTitle>
      <SeoulMapBtn onClick={() => setPosition(!position)} position={position}>
        ⌖
      </SeoulMapBtn>
      <MapTextContainer>
        <MapText>{t("contact-seoul")}</MapText>
      </MapTextContainer>
      <MapTitle>EXHIBITION & LOGISTICS CENTER</MapTitle>
      <MapBtn onClick={() => setPosition(!position)} position={position}>
        ⌖
      </MapBtn>
      <MapTextContainer>
        <MapText>{t("contact-gimpo")}</MapText>
        <MapText>{t("contact-daegu")}</MapText>
        <MapText>{t("contact-daejeon")}</MapText>
        <MapText>{t("contact-gwangju")}</MapText>
        <MapText>{t("contact-busan")}</MapText>
        <MapText>{t("contact-namyangju")}</MapText>
      </MapTextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  flex-direction: column;
  text-align: right;
  width: 40vw;
  margin-top: -5rem;
  margin-right: 30px;
  animation: fadeInLeft 1s;
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;
const MapTitle = styled.p`
  width: 100%;
  color: #e61b39;
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  text-align: right;
  position: relative;
  right: 30px;
`;
const MapText = styled.p`
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  font-size: 1rem;
  line-height: 23px;
  margin-top: 0px;
  margin-bottom: 20px;
  white-space: pre-line;
`;
const SeoulMapBtn = styled.div`
  font-size: 3rem;
  cursor: pointer;
  position: relative;
  bottom: 74px;
  :hover {
    color: #e61b39;
  }
  color: ${(props) => (props.position ? " #858484" : "#e61b39")};
`;
const MapBtn = styled.div`
  font-size: 3rem;
  cursor: pointer;
  position: relative;
  bottom: 74px;
  :hover {
    color: #e61b39;
  }
  color: ${(props) => (props.position ? "#e61b39" : " #858484")};
`;

const MapTextContainer = styled.div`
  margin-top: -4rem;
`;
export default Location;
