import styled from "styled-components"
import MainSlider from "./components/MainSlider";

const Main = () => {
    return(
<Container>
    <MainSlider/>
</Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export default Main;