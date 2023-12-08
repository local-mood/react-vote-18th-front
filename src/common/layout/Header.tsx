import { styled } from "styled-components";
import HeaderButton from "../ui/buttons/HeaderButton/HeaderButton";
import theme from "@/styles/theme";

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderText />
      <HeaderBtn>
        <HeaderButton
          width="9.6rem"
          bgColor={theme.colors.white}
          addClass={`border:1px solid ${theme.colors.mainColor}; margin-right:2rem;`}
        >
          로그인
        </HeaderButton>
        <HeaderButton
          width="11.4rem"
          bgColor={theme.colors.mainColor}
          addClass={`border:1px solid ${theme.colors.white}; color:${theme.colors.white}`}
        >
          회원가입
        </HeaderButton>
      </HeaderBtn>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 4rem;
`;

const HeaderText = styled.div`
  width: 17.2rem;
  height: 7.3rem;
  background-image: url("/img/headerText.jpg");
  background-size: cover;
`;

const HeaderBtn = styled.div`
  display: flex;
  align-items: center;
`;
