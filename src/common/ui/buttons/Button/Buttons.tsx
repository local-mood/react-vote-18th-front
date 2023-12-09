import { ButtonProps } from "@/common/state/button-state";
import styled from "styled-components";

export default function Button({ children, addClass }: Partial<ButtonProps>) {
  return <ButtonWrapper $addClass={addClass}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.div<{
  $addClass: string | undefined;
}>`
  width: 29.1rem;
  height: 8.2rem;
  background-color: ${(props) => props.theme.colors.lightMainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.headLine2};
  ${(props) => props.$addClass};
`;
