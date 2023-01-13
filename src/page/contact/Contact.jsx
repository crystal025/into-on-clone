import MapBox from "./components/MapBox";
import Location from "./components/Location";
import styled from "styled-components";
import { useState } from "react";
import SubmitText from "./components/SubmitText";

const Contact = () => {
  const [position, setPosition] = useState(false);

  return (
    <>
      <MapBox position={position} />
      <TextContainer>
        <Location position={position} setPosition={setPosition} />
        <SubmitText />
      </TextContainer>
    </>
  );
};

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
`;
export default Contact;
