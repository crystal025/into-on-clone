import styled from "styled-components";

const RecruitPeopleText = () => {
  return (
    <RecruitContainer>
      <ReTitle>INTO-ON people</ReTitle>
      <ReContent>
        일과 삶을 즐기고, 세상을 배우고, 서로 소통하는 우리입니다.
        <br></br>
        오늘도 우리는 함께 성장해 나갑니다.
      </ReContent>
    </RecruitContainer>
  );
};

const RecruitContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  max-width: 1200px;
  margin-top: 150px;
  margin-left: 130px;
`;

const ReTitle = styled.h2`
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 0px;
  font-style: normal;
  color: #222;
  font-size: 39px;
  margin: 0 0 20px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const ReContent = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  margin-top: -10px;
`;

export default RecruitPeopleText;
