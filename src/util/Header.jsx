import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [onMain, setOnMain] = useState(false);

  const onClickPartner = () => {
    window.location.href = "http://intoon.noobee.net/";
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setOnMain(true);
    } else {
      setOnMain(false);
    }
  }, [onMain]);

  return (
    <Container>
      <Logo onClick={() => navigate("/")}></Logo>
      <TextBox onMain={onMain}>
        <p onClick={() => navigate("/about")}>about</p>
        <p onClick={() => navigate("/projects")}>projects</p>
        <p onClick={() => navigate("/recruit")}>recruit</p>
        <p onClick={() => navigate("/contact")}>contact</p>
        <p onClick={onClickPartner}>partner</p>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  //min-width: 800px;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  backface-visibility: hidden;
  transition: background-color 0.25s ease-in-out;
  z-index: 999;
  overflow-x: hidden;
`;
const Logo = styled.div`
  width: 120px;
  height: 21px;
  background-image: url("http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/logo-1.svg");
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const TextBox = styled.div`
  color: ${(props) => (props.onMain ? "#fff" : "#000")};
  height: 84px;
  line-height: 84px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  font-style: normal;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  p {
    margin-right: 45px;
    :hover {
      color: red;
      text-decoration: underline;
    }
  }
`;
export default Header;
