import {
  LoginFormState,
  RegisterFormState,
} from "@/features/form/states/form-data-state";

export function validateForm(
  formData: LoginFormState | RegisterFormState
): [Record<string, string>] {
  const errorMessage: Record<string, string> = {};

  if ("username" in formData && !formData.username?.trim()) {
    errorMessage.username = "유저이름을 입력해주세요.";
  }

  if ("userid" in formData && !formData.userid?.trim()) {
    errorMessage.userid = "유저아이디를 입력해주세요.";
  }

  if (!formData.email.trim()) {
    errorMessage.email = "이메일을 입력해주세요.";
  }

  if (!formData.password.trim()) {
    errorMessage.password = "비밀번호를 입력해주세요.";
  }

  if ("teamId" in formData && formData.teamId === -1) {
    errorMessage.teamId = "팀을 선택해주세요.";
  }

  if ("devPartId" in formData && formData.devPartId === -1) {
    errorMessage.devPartId = "파트를 선택해주세요.";
  }

  return [errorMessage];
}
