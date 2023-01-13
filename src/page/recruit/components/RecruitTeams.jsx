import styled from "styled-components";

const RecruitTeams = () => {
  return (
    <RecruitContainer>
      <ReTitle>our teams</ReTitle>
      <TeamsExplain>
        <TeamBox>
          <BoxTitle>PLANNING</BoxTitle>
          <BoxContent>
            symposium plan
            <br></br>workshop & congress
            <br></br>event plan
          </BoxContent>
        </TeamBox>
        <TeamBox>
          <BoxTitle>ID TEAM</BoxTitle>
          <BoxContent>
            fair and exhibition<br></br>
            space design<br></br>CAD · engineering
          </BoxContent>
        </TeamBox>
        <TeamBox>
          <BoxTitle>GD TEAM</BoxTitle>
          <BoxContent>
            advertisement design<br></br>CI & BI<br></br>package & POP
          </BoxContent>
        </TeamBox>
        <TeamBox>
          <BoxTitle>EXHIBITION</BoxTitle>
          <BoxContent>
            system booth
            <br></br>custom booth
          </BoxContent>
        </TeamBox>
        <TeamBox>
          <BoxTitle>LOGISTICS</BoxTitle>
          <BoxContent>
            logistics management
            <br></br>distribution
          </BoxContent>
        </TeamBox>
        <TeamBox>
          <BoxTitle>OTHERS</BoxTitle>
          <BoxContent>
            information technology
            <br></br>
            manufacturing technology
            <br></br>
            medical consult
          </BoxContent>
        </TeamBox>
      </TeamsExplain>
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
  margin-top: 50px;
  margin-left: 130px;
  width: 100%;
  margin-bottom: 100px;
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

const TeamsExplain = styled.div`
  background-image: url("http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/recruit-이미지-변경.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 40px;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

const TeamBox = styled.div`
  height: fit-content;
  border-left: 1px solid #e7203a;
  padding-left: 10px;
  width: 20vw;
  flex-shrink: 0;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const BoxTitle = styled.p`
  color: #e7203a;
  font-size: 24px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 20px;
`;
const BoxContent = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
`;
export default RecruitTeams;
