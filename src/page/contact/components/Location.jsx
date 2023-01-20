import styled from "styled-components";
import { useTranslation } from 'react-i18next'

const Location = ({ position, setPosition }) => {
  const { t } = useTranslation()

  return (
    <Container>
      <MapTitle>DESIGN STUDIO & SEOUL OFFICE</MapTitle>
      <SeoulMapBtn onClick={() => setPosition(!position)} position={position}>
        ⌖
      </SeoulMapBtn>
      <MapText>
      {t("contact-seoul")}
      </MapText>
      <MapTitle>EXHIBITION & LOGISTICS CENTER</MapTitle>
      <MapBtn onClick={() => setPosition(!position)} position={position}>
        ⌖
      </MapBtn>
      <MapText>
      {t("contact-gimpo")}
      </MapText>
      <MapText>
      {t("contact-daegu")}
      </MapText>
      <MapText>
      {t("contact-daejeon")}
      </MapText>
      <MapText>
      {t("contact-gwangju")}
      </MapText>
      <MapText>
      {t("contact-busan")}
      </MapText>
      <MapText>
      {t("contact-namyangju")}
      </MapText>
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
  margin-right: 30px;
`;
const MapTitle = styled.p`
  width: 100%;
  color: #e61b39;
  font-size: 16px;
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
  font-size: 13px;
  line-height: 23px;
  margin-top: 0;
  margin-bottom: 20px;
  white-space: pre-line;
`;
const SeoulMapBtn = styled.div`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  bottom: 44px;
  :hover {
    color: #e61b39;
  }
  color: ${(props) => (props.position ? " #858484" : "#e61b39")};
`;
const MapBtn = styled.div`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  bottom: 44px;
  :hover {
    color: #e61b39;
  }
  color: ${(props) => (props.position ? "#e61b39" : " #858484")};
`;
export default Location;
