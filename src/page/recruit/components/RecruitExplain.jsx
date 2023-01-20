import styled from "styled-components";
import { useTranslation } from 'react-i18next'

const RecruitExplain = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Explain style={{"whiteSpace":"pre-line"}}>
      {t("recruit-footer")}
      </Explain>
      <Arrow>⌵</Arrow>
      <SendEmail href="mailto:recruit@into-on.com">
        recruit@into-on.com
      </SendEmail>
    </div>
  );
};

const Explain = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 120px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #666;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
`;

const Arrow = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 120px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #e7203a;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 0px;
  font-style: normal;
`;

const SendEmail = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  color: #e61b39;
  cursor: pointer;
  margin: 50px auto 150px auto;
  text-decoration: underline;
`;
export default RecruitExplain;
