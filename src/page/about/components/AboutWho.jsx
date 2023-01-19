import styled from "styled-components"
import { useTranslation } from 'react-i18next'

const AboutWho = () => {
  const { t } = useTranslation()

    return(
        <Container>
            <h2>who we are</h2>
            <p>{t("about-who-1")}</p>
            <p>{t("about-who-2")}</p>
            <img alt="year" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/history.png"/>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1200px;
    padding-top: 5%;
    padding-right: 30px;
    padding-bottom: 5%;
    padding-left: 30px;
    margin: 0px auto 20px auto;
    visibility: visible;
    animation-duration: 0.7s;
    @keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }}

    p{
        word-break: keep-all;
        line-height: 30px;
        margin-top: 0;
        margin-bottom: 20px;
        display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    }

    h2,p,img{
        position: relative;
        animation: fadeInUp 1s;
    }
`

export default AboutWho