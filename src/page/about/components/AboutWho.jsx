import styled from "styled-components"

const AboutWho = () => {
    return(
        <Container>
            <h2>who we are</h2>
            <p>연구와 경험의 숙성 속 나의 성장이 팀과 회사의 성장으로 연결되어 함께 나란히 걸어 나아가는 우리는 어느덧 프로입니다. 좋아하는 일을 제일 잘하며 끼 많고 개성 넘치는 ’나’ 들이 모여 디자인과 홍보의 모든 일들에 산뜻하고 참신한 솔루션을 만들어 냅니다.</p>
            <p>오늘도 새로운 프로젝트들에 대한 즐거운 도전과 함께 또 한 뼘 성장하는 인투온 입니다</p>
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
    font-family: NanumSquare, dotum, 돋움, sans-serif;

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
`

export default AboutWho