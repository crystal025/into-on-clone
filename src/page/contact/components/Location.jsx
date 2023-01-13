import styled from "styled-components";

const Location = ({ position, setPosition }) => {
  return (
    <Container>
      <MapTitle>DESIGN STUDIO & SEOUL OFFICE</MapTitle>
      <SeoulMapBtn onClick={() => setPosition(!position)} position={position}>
        ⌖
      </SeoulMapBtn>
      <MapText>
        서울특별시 용산구 백범로 341 금호리첸시아 A블록
        <br></br>
        T. +82 2 2285 2506
      </MapText>
      <MapTitle>EXHIBITION & LOGISTICS CENTER</MapTitle>
      <MapBtn onClick={() => setPosition(!position)} position={position}>
        ⌖
      </MapBtn>
      <MapText>
        [김포본사]
        <br></br>
        경기도 김포시 월곶면 애기봉로 392-11
        <br></br>
        T. +82 31 996 8530
      </MapText>
      <MapText>
        [대구]
        <br></br>
        대구광역시 동구 이노밸리로 40
      </MapText>
      <MapText>
        [대전]
        <br></br>
        대전광역시 유성구 덕명동로16번길 5-6
      </MapText>
      <MapText>
        [광주]
        <br></br>
        광주광역시 서구 화개중앙로 9 보아스빌1층
      </MapText>
      <MapText>
        [부산]
        <br></br>
        부산 해운대구 마린시티3로 37
      </MapText>
      <MapText>
        [남양주]
        <br></br>
        경기도 남양주시 진접읍 연평리 417번지
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
