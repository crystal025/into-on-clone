import styled from "styled-components";
import { useTranslation } from 'react-i18next'

const RecruitPeopleText = () => {
  const { t } = useTranslation()
  return (
    <RecruitContainer>
      <ReTitle>INTO-ON people</ReTitle>
      <ReContent style={{"whiteSpace":"pre-line"}}>
      {t("recruit-people")}
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
