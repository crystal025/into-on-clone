import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: "0px",
  };
  return (
    <Container>
      <StyledSlide {...settings}>
        <div>
          <ImageBox
            id="0"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main1-1.jpg"
            }
          ></ImageBox>
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
        </div>
        <div>
          <ImageBox
            id="1"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main2-1.jpg"
            }
          ></ImageBox>
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
        </div>
        <div>
          <ImageBox
            id="2"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main3-2.jpg"
            }
          ></ImageBox>
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
        </div>
        <div>
          <ImageBox
            id="3"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main4-1.jpg"
            }
          ></ImageBox>
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
        </div>
      </StyledSlide>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  bottom: 85px;
  text-align: center;
`;

const ImageBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 60px;
  margin-bottom: -40px;
  width: 100%;
  .slick-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: zoom-in 9s ease infinite;

    @keyframes zoom-in {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    }
  }
  .slick-slider {
    display: flex;
  }
  .slick-track {
    display: flex;
    height: 100%;
  }
  .slick-dots {
    display: block;
    position: absolute;
    top: 50rem;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  color: #fff;
  font-size: 30px;
  font-family: "Noto Sans KR", "NanumSquare", dotum, "ë‹ì›€", sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.9;
  position: relative;
  bottom: 400px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  color: #fff;
  font-size: 18px;
  font-family: "Noto Sans KR", "NanumSquare", dotum, "ë‹ì›€", sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.9;
  position: relative;
  bottom: 400px;
`;
export default MainSlider;
