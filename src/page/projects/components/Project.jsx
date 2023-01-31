import styled from "styled-components";

const Project = ({ project }) => {
  return (
    <ImgBox>
      <Text>
        {project?.title}
        <br></br>
        {project?.content}
      </Text>
      <Img src={project?.url} alt={project?.title} />
    </ImgBox>
  );
};

const ImgBox = styled.div`
  padding: 10px;
  width: calc(100% / 3.2);
  overflow: hidden;
  flex-grow: 0;
  text-align: left;
  animation: fadeIn 3s;
  &:hover {
    ${"p"} {
      visibility: visible;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, -100%);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

const Text = styled.p`
  font-weight: 700;
  color: #fff;
  font-size: 1rem;
  line-height: 1.9;
  letter-spacing: 0px;
  font-style: normal;
  position: absolute;
  transform: translate(10%, 380%);
  visibility: hidden;
  z-index: 999999;
`;

const Img = styled.img`
  vertical-align: top;
  max-width: 100%;
  height: auto;
  &:hover {
    filter: brightness(40%);
    animation: zoom-in 1s ease;
    @keyframes zoom-in {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  }
`;

export default Project;
