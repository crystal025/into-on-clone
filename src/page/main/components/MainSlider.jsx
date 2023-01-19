import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
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
          >
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
          </ImageBox>
        </div>
        <div>
          <ImageBox
            id="1"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main2-1.jpg"
            }
          >
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox> 
          </ImageBox>
        </div>
        <div>
          <ImageBox
            id="2"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main3-2.jpg"
            }
          >
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
          </ImageBox>
        </div>
        <div>
          <ImageBox
            id="3"
            url={
              "http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/main4-1.jpg"
            }
          >
          <TitleBox>beauty of senses & joy of challenges</TitleBox>
          <ContentBox>
            Our design creatively tells your brand's story.
          </ContentBox>
          </ImageBox>
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
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 60px;
  margin-bottom: -40px;
  width: 100%;
  overflow-y: hidden;
  .slick-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: zoom-in 9s ease;

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
    overflow-y: hidden;
  }
  .slick-dots {
    position: relative;
    bottom: 70px;
   
    .slick-active {
      button::before {
        color: #c1c1c1;
        font-size: 15px;
      }
    }
    button::before {
      color: #ffffff;
      font-size: 15px;
    }
  }
`;


const TitleBox = styled.h2`
  z-index: 999;
  color: #fff;
  font-size: 5rem;
  font-weight: 600;
  letter-spacing: 0px;
  font-style: normal;
  line-height: 1.9;
  text-align: center;
`;

const ContentBox = styled.p`
  z-index: 999;
  color: #fff;
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 10px;
  font-style: normal;
  line-height: 1.9;
  text-align: center;
`;

export default MainSlider;
