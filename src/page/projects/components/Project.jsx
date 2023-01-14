import styled from "styled-components";

const Project = ({ props }) => {
  console.log(props);
  return (
    <ImgBox>
      <Text></Text>
      <Img />
    </ImgBox>
  );
};

const ImgBox = styled.div`
  padding: 10px;
  width: calc(100% / 3);
  overflow: hidden;
`;
const Text = styled.p`
  font-weight: 700;
  font-family: "Noto Sans KR", "NanumSquare", dotum, "ë‹ì›€", sans-serif;
  color: #666666;
  font-size: 18px;
  line-height: 1.9;
  letter-spacing: 0px;
  font-style: normal;
`;

const Img = styled.img`
  vertical-align: top;
  max-width: 100%;
  height: auto;
`;

export default Project;
