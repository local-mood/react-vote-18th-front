import FormInput from "@/common/ui/formInput/FormInput";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import { styled } from "styled-components";

export default function Login() {
  const inputInfo = [
    {
      placeholder: "이름",
    },
    {
      placeholder: "아이디",
    },
    {
      placeholder: "비밀번호",
    },
    {
      placeholder: "비밀번호 확인",
    },
    {
      placeholder: "이메일 주소",
    },
  ];
  return (
    <LoginContainer>
      <LoginDetail>
        <PageMainText text="로그인" addClass="margin-bottom:1rem;" />
        <FormContainer>
          {inputInfo.map((input, index) => (
            <FormInput
              key={input.placeholder}
              placeholder={input.placeholder}
              addClass={
                index === inputInfo.length - 1 ? "" : "margin-bottom:3.5rem;"
              }
            />
          ))}
        </FormContainer>
      </LoginDetail>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15rem 0;
  font-size: 3rem;
  min-height: 100vh;
  min-width: 375px;
`;

const LoginDetail = styled.div`
  width: 85%;
`;

const FormContainer = styled.div`
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 2rem;
  padding: 5.2rem 6rem;
`;
