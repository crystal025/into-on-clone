import styled from "styled-components";
import ProjectBox from "./components/ProjectBox";

const Projects = () => {
  return (
    <Container>
      <ul>
        <li>ALL</li>
        <li>SPACE</li>
        <li>GRAPHIC</li>
        <li>PLANNING</li>
        <li>BOOTHTAINER</li>
        <li>WEBINAR</li>
        <li>OTHERS</li>
      </ul>
      <BoxContainer>
        <ProjectBox url={""} />
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 7%;
  font-size: 18px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    list-style: none;
    margin-bottom: 55px;
    padding: 0;
    line-height: 34px;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0px;
    font-style: normal;
  }

  li {
    margin: 15px;
    list-style: none;
    color: #666;

    :hover {
      color: red;
      text-decoration: underline;
    }
  }
`;

const BoxContainer = styled.div`
  display: flex;
`;
export default Projects;
