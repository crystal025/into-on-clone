import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'

const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(['page']);
  const [onMain, setOnMain] = useState("false");
  const path = window.location.pathname;

  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')

  const onClickPartner = () => {
    window.location.href = "http://intoon.noobee.net/";
  };

  useEffect(() => {
    if (path === "/") {
      setOnMain("true");
    } else {
      setOnMain("false");
    }
  }, [path]);
  return (
    <Container background={onMain}>
      <Logo onClick={() => navigate("/")}></Logo>
      <TextBox color={onMain}>
        <p onClick={() => navigate("/about")}>about</p>
        <p onClick={() => navigate("/projects/all")}>projects</p>
        <p onClick={() => navigate("/recruit")}>recruit</p>
        <p onClick={() => navigate("/contact")}>contact</p>
        <p onClick={onClickPartner}>partner</p>
        <Circle>
        <p onClick={changelanguageToKo}>ko</p>
        </Circle>
        <Circle>
        <p onClick={changelanguageToEn}>En</p>
        </Circle>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
background-color: ${(props) => (props.background === "true" ? "transparent"  : "#fff")};
  height: 84px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  backface-visibility: hidden;
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
 font-family: "Noto Sans KR", "NanumSquare", dotum, "ë‹ì›€", sans-serif;
  color: ${(props) => (props.color === "true" ? "#fff" : "#9fa0a0")};
  height: 84px;
  line-height: 84px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0px;
  font-style: normal;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 30px;
  -webkit-font-smoothing: subpixel-antialiased;


  p {
    margin-right: 45px;
    :hover {
      color: red;
      text-decoration: underline;
    }
  }
`;

const Circle = styled.div`
  width: 2rem;
  height:  2rem;
  line-height: 0%;
  border: 1px solid #9fa0a0;
  border-radius: 50%;
  margin-right: 0.5rem;


  p{
    position: relative;
    bottom: 0.1rem;
    left: 0.3rem;
    font-size: smaller;
  }
`
export default Header;
