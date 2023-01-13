import styled from "styled-components";

const SubmitForm = () => {
  return (
    <FormBox>
      <FormText>Name</FormText>
      <FormInput />
      <FormText>E-mail</FormText>
      <FormInput />
      <FormText>Subject</FormText>
      <FormInput />
      <FormText>Message</FormText>
      <FormTextArea />
      <FooterBox>
        <FooterText>+82 2 3275 3031 / sales@into-on.com</FooterText>
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FooterBox>
    </FormBox>
  );
};

const FormBox = styled.form`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  width: 100%;
`;

const FormText = styled.p`
  color: #e71e38;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  font-family: "Noto Sans KR", NanumSquare, dotum, 돋움, sans-serif;
`;

const FormInput = styled.input`
  background: #e5e4e4;
  border: none;
  height: 29px;
  padding: 8px 15px;
  color: #aaa9a9;
  font-size: 13px;
  width: 80%;
`;

const FormTextArea = styled.textarea`
  height: 150px;
  background: #e5e4e4;
  border: none;
  padding: 8px 15px;
  color: #aaa9a9;
  font-size: 13px;
  width: 80%;
`;

const FooterBox = styled.div`
  margin-top: 30px;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: 12px;
`;
const FooterText = styled.p`
  color: #777777;
`;

const SubmitBtn = styled.button`
  font-weight: 400;
  letter-spacing: 0px;
  padding: 13px 29px;
  line-height: 17px;
  font-size: 14px;
  color: #ffffff;
  background: #e71e38;
  border: 0;
  margin-bottom: 50px;
`;
export default SubmitForm;
