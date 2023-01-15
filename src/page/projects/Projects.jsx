import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectBox from "./components/ProjectBox";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ul>
        <li onClick={() => navigate("/projects/all")}>ALL</li>
        <li onClick={() => navigate("/projects/space")}>SPACE</li>
        <li onClick={() => navigate("/projects/graphic")}>GRAPHIC</li>
        <li onClick={() => navigate("/projects/planning")}>PLANNING</li>
        <li onClick={() => navigate("/projects/boothtainer")}>BOOTHTAINER</li>
        <li onClick={() => navigate("/projects/webinar")}>WEBINAR</li>
        <li onClick={() => navigate("/projects/others")}>OTHERS</li>
      </ul>
      <BoxContainer>
        <ProjectBox />
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 7%;
  font-size: 1.7rem;
  margin: 7% auto;
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
    font-weight: 900;
    letter-spacing: 0px;
    font-style: normal;
  }

  li {
    margin: 15px;
    list-style: none;
    color: #bdbcbc;

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
