import { useRef } from "react";
import styled from "styled-components";

const RecruitPeopleImg = ({ url, colorUrl }) => {
  const imgRef = useRef();

  const onHoverEvent = () => {
    imgRef.current.src = colorUrl;
  };

  const onLeaveEvent = () => {
    imgRef.current.src = url;
  };

  return (
    <ImgBox>
      <Img
        src={url}
        alt={url}
        ref={imgRef}
        onMouseEnter={onHoverEvent}
        onMouseLeave={onLeaveEvent}
      ></Img>
    </ImgBox>
  );
};

const ImgBox = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;
  width: 30%;
  //width: calc(33.33% - ((5px + 5px) * 0.3333));
  margin-right: 5px;
  flex-grow: 1;
`;

const Img = styled.img`
  vertical-align: top;
  max-width: 100%;
  height: auto;
  min-height: 1em;
  overflow-clip-margin: content-box;
  overflow: clip;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;

export default RecruitPeopleImg;
