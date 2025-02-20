import FormLayout from "@/features/form/components/Form/FormLayout/FormLayout";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FORM_TYPE } from "@/features/form/constant/form-type";
import { usePostSignUp } from "@/features/auth/queries/usePostSignUp";
import {
  LoginFormState,
  RegisterFormState,
} from "@/features/form/states/form-data-state";

export default function Register() {
  const { mutate: postSignUp, error, isLoading } = usePostSignUp();
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const registerFormSubmit = (formData: LoginFormState | RegisterFormState) => {
    if ("username" in formData) {
      postSignUp(formData);
      if (!isLoading && !error) {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      }
      if (error) {
        alert("회원가입 중 문제가 발생하였습니다.");
      }
    } else {
      return;
    }
  };
  return (
    <RegisterContainer $isMobile={isMobile}>
      <RegisterDetail>
        <PageMainText text="회원가입" addClass="margin-bottom:1rem;" />
        <FormLayout type={FORM_TYPE.REGISTER} onSubmit={registerFormSubmit} />
      </RegisterDetail>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$isMobile ? null : "center")};
  padding: 15rem 0;
  font-size: 3rem;
  min-height: 100vh;
  min-width: 375px;
`;

const RegisterDetail = styled.div`
  width: 85%;
`;
