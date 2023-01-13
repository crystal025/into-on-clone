import styled from "styled-components";

const RecruitExplain = () => {
  return (
    <div>
      <Explain>
        ㈜인투온과 함께 일할 준비가 된 분은 개성 있는 이력서, 포트폴리오를
        아래의 이메일로 보내주세요.
        <br></br>서류접수는 이메일로 한하며, 인터뷰 대상자 선정 후 개별 통보해
        드립니다.
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
