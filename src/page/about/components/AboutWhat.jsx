import styled from "styled-components"
import { useTranslation } from 'react-i18next'


const AboutWhat = () => {
    const { t } = useTranslation()

    return(
        <Container>
            <h2>what we do</h2>
            <ul>
                <li>
                    <img alt="icon01" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon01.png
"/>
                    <LiBox>
                    <span>{t("about-what-1-1")}</span>
                    <p>{t("about-what-1-2")}</p>
                    </LiBox>
                </li>
                <li>
                    <img alt="icon02" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon02.png"/>
                    <LiBox>
                    <span>{t("about-what-2-1")}</span>
                    <p>{t("about-what-2-2")}</p>
                    </LiBox>
                </li>
                
                <li>
                    <img alt="icon03" src="http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon03.png"/>
                    <LiBox>
                    <span>{t("about-what-3-1")}</span>
                    <p>{t("about-what-3-2")}</p>
                    </LiBox>
                </li>
                
                <li>
                    <img alt="icon04" src="	http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/icon04.png"/>
                    <LiBox>
                    <span>{t("about-what-4-1")}</span>
                    <p>{t("about-what-4-2")}</p>
                    </LiBox>
                </li>
                
                <li>
                    <img alt="icon05" src=""/>
                    <LiBox>
                    <span>{t("about-what-5-1")}</span>
                    <p style={{"whiteSpace":"pre-line"}}>{t("about-what-5-2")}</p>
                    </LiBox>
                </li>
            </ul>
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
    position: relative;
    animation: fadeInUp 1s;

    ul {
        display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    }

    li {
    padding: 30px 0 30px 0px;
    list-style: none;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    
    span {
        display: block;
    color: #e71e38;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 700;
    }
`
const LiBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 40px;
`
export default AboutWhat