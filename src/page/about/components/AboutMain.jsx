import styled from "styled-components"

const AboutMain = () => {
    return(
        <Container>
            <TitleBox>your creative partner</TitleBox>
            <ContentBox>brand activator & design solutionist</ContentBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 700px;
    background-color: rgba(255, 255, 255, 0);
    background-image: url("http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/about_bg-300x133.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const TitleBox = styled.div`
    font-size: 90px;
    color: #000000;
    font-weight: 800;
    font-family: 'NanumSquare';
`
const ContentBox = styled.div`
    font-size: 20px;
    color: #777777;
    letter-spacing: 10px;
`

export default AboutMain