import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(["page"]);
  const [onMain, setOnMain] = useState("false");
  const [korean, setKorean] = useState("true");
  const ulRef = useRef();
  const path = window.location.pathname;

  const changelanguageToKo = () => i18n.changeLanguage("ko");
  const changelanguageToEn = () => i18n.changeLanguage("en");

  const categoryList = ["about", "projects", "recruit", "contact", "partner"];
  const indexList = [0, 1, 2, 3, 4];

  const getCategory = async () => {
    const index = categoryList.findIndex(
      (category) => category === window.location.pathname.split("/")[1]
    );

    const notIndex = indexList.filter((i) => i !== index);
    const refChild = ulRef?.current.children[index];
    const oneRefChild = ulRef?.current.children[notIndex[0]];
    const twoRefChild = ulRef?.current.children[notIndex[1]];
    const threeRefChild = ulRef?.current.children[notIndex[2]];
    const fourRefChild = ulRef?.current.children[notIndex[3]];

    refChild.style = "color:#e71e38";
    oneRefChild.style = "color:#e0dede";
    twoRefChild.style = "color:#e0dede";
    threeRefChild.style = "color:#e0dede";
    fourRefChild.style = "color:#e0dede";
  };

  const onClickPartner = () => {
    window.location.href = "http://intoon.noobee.net/";
  };

  const searchLang = () => {
    if (i18n.language === "ko") {
      setKorean("true");
    } else if (i18n.language === "en") {
      setKorean("false");
    }
  };

  useEffect(() => {
    searchLang();
  }, [i18n.language]);

  useEffect(() => {
    getCategory();
  }, [window.location.pathname]);

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
      <TextBox color={onMain} ref={ulRef}>
        <li onClick={() => navigate("/about")}>about</li>
        <li onClick={() => navigate("/projects/all")}>projects</li>
        <li onClick={() => navigate("/recruit")}>recruit</li>
        <li onClick={() => navigate("/contact")}>contact</li>
        <li onClick={onClickPartner}>partner</li>
        <Circle color={korean}>
          <li onClick={changelanguageToKo}>KOR</li>
        </Circle>
        <CircleEn color={korean}>
          <li onClick={changelanguageToEn}>ENG</li>
        </CircleEn>
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) =>
    props.background === "true" ? "transparent" : "#fff"};
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
const TextBox = styled.ul`
  color: ${(props) => (props.color === "true" ? "#fff" : "#9fa0a0")};
  height: 84px;
  line-height: 84px;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0px;
  font-style: normal;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 50px;
  justify-content: center;
  overflow: hidden;
  list-style: none;
  margin-bottom: 43px;
  margin-top: 50px;
  line-height: 34px;

  li {
    margin-right: 45px;
    :hover {
      color: #e71e38;
      text-decoration: underline;
    }
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  line-height: 0%;
  border: 1px solid
    ${(props) => (props.color === "true" ? "#e71e38" : "#9fa0a0")};
  color: ${(props) => (props.color === "true" ? "#e71e38" : "#9fa0a0")};
  border-radius: 50%;
  margin-right: 0.5rem;

  li {
    font-size: 0.7rem;
    position: relative;
    top: 1rem;
    left: 0.3rem;
  }
`;

const CircleEn = styled.div`
  width: 2rem;
  height: 2rem;
  line-height: 0%;
  border: 1px solid
    ${(props) => (props.color === "true" ? "#9fa0a0" : "#e71e38")};
  color: ${(props) => (props.color === "true" ? "#9fa0a0" : "#e71e38")};
  border-radius: 50%;
  margin-right: 0.5rem;

  li {
    font-size: 0.7rem;
    position: relative;
    top: 1rem;
    left: 0.3rem;
  }
`;

export default Header;
