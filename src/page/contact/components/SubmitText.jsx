import styled from "styled-components";
import SubmitForm from "./SubmitForm";

const SubmitText = () => {
  return (
    <Container>
      <SubmitTitle>
        Looking for a business partner?
        <br></br>
        Please fill the blanks below
      </SubmitTitle>
      <SubmitForm />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  width: 40vw;
  text-align: left;
`;
const SubmitTitle = styled.p`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 30px;
  color: #e71e38;
  font-style: italic;
  font-weight: 700;
`;
export default SubmitText;
