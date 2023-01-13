import styled from "styled-components";

const AboutService = () => {
  return (
    <Container>
      <BackgroundImg>
        <TextContainer>
          <h2>basic services</h2>
          <FirstContainer>
            <AboutBox>
              <BoxTitle>PLANNING</BoxTitle>
              <BoxContent>
                symposium plan
                <br></br>
                workshop & congress
                <br></br>
                global launching event plan
              </BoxContent>
            </AboutBox>
            <AboutBox>
              <BoxTitle>DESIGN</BoxTitle>
              <BoxContent>
                fair and exhibition
                <br></br>
                space design
                <br></br>
                advertisement design
                <br></br>
                graphic design
              </BoxContent>
            </AboutBox>
            <AboutBox>
              <BoxTitle>BOOTH</BoxTitle>
              <BoxContent>
                domestic & overseas
                <br></br>
                system service
                <br></br>
                construction
              </BoxContent>
              <BoxTitle>LOGISTICS</BoxTitle>
              <BoxContent>
                warehousing
                <br></br>
                material logistics
              </BoxContent>
            </AboutBox>
            <AboutBox style={{ position: "relative", top: 170 }}>
              <BoxTitle>Information Tech</BoxTitle>
              <BoxContent>
                Web site
                <br></br>
                Mobile
                <br></br>
                APP
                <br></br>
                Web Symposium
              </BoxContent>
            </AboutBox>
          </FirstContainer>
          <h2>special services</h2>
          <FirstContainer>
            <AboutBox>
              <BoxTitle>WEBINAR</BoxTitle>
              <BoxTitle>MEDICAL CONSULT</BoxTitle>
            </AboutBox>
            <AboutBox>
              <BoxTitle>VEEVA TECHNOLOGY</BoxTitle>
            </AboutBox>
            <AboutBox>
              <BoxTitle>BOOTHTAINER</BoxTitle>
            </AboutBox>
          </FirstContainer>
        </TextContainer>
      </BackgroundImg>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
`;
const BackgroundImg = styled.div`
  background-attachment: fixed;
  background-color: rgba(255, 255, 255, 0);
  background-image: url("http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/10/about_bg2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 897px;
  width: 100vw;
`;
const TextContainer = styled.div`
  max-width: 1200px;
  padding-top: 5%;
  padding-right: 30px;
  padding-bottom: 5%;
  padding-left: 30px;
  margin: 0px auto 20px auto;
  animation-duration: 0.7s;
  font-family: NanumSquare, dotum, 돋움, sans-serif;
`;

const FirstContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
  padding-right: 30px;
  padding-bottom: 5%;
  margin-bottom: 20px;
  margin-left: -55px;
`;
const AboutBox = styled.div`
  height: fit-content;
  border-left: 1px solid #e7203a;
  padding-left: 10px;
`;

const BoxTitle = styled.p`
  color: #e7203a;
  font-size: 24px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 20px;
`;
const BoxContent = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
`;
export default AboutService;
