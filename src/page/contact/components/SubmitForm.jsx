import styled from "styled-components";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SubmitForm = () => {
  const form_ref = useRef();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({ criteriaMode: "all", mode: "onChange" });

  const onVaild = async (data) => {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    emailjs
      .sendForm(serviceId, templateId, form_ref.current, publicKey)
      .then(
        (result) =>
          result.status === 200 && alert("이메일 전송이 완료되었습니다.")
      )
      .then(() => navigate("/contact"))
      .catch((err) => console.log(err));
  };
  return (
    <FormBox ref={form_ref} onSubmit={handleSubmit(onVaild)}>
      <FormText>Name</FormText>
      <FormInput
        name="name"
        type="name"
        aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
        {...register("name", {
          required: "필수 입력 필드입니다.",
        })}
      />
      {errors.name !== undefined && <ErrorMsg>{errors.name.message}</ErrorMsg>}
      <FormText>E-mail</FormText>
      <FormInput
        name="email"
        type="email"
        aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
        {...register("email", {
          required: "필수 입력 필드입니다.",
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
            message: "이메일이 형식에 맞지 않습니다.",
          },
        })}
      />
      {errors.email !== undefined && (
        <ErrorMsg>{errors.email.message}</ErrorMsg>
      )}
      <FormText>Subject</FormText>
      <FormInput name="subject" />
      <FormText>Message</FormText>
      <FormTextArea
        name="message"
        type="message"
        aria-invalid={!isDirty ? undefined : errors.message ? "true" : "false"}
        {...register("message", {
          required: "필수 입력 필드입니다.",
        })}
      />
      {errors.message !== undefined && (
        <ErrorMsg>{errors.message.message}</ErrorMsg>
      )}
      <FooterBox>
        <FooterText>+82 2 3275 3031 / sales@into-on.com</FooterText>
        <SubmitBtn type="submit" disabled={isSubmitting}>
          SUBMIT
        </SubmitBtn>
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
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  color: #e71e38;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0px;
  font-style: normal;
`;
export default SubmitForm;
