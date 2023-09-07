export const validate = ({ Email, Pw }) => {
  let disabled = !Email.includes("@") || Pw.length < 8;

  let errors = {
    Email: !Email.includes("@") && "이메일 양식을 확인해주세요",
    Pw: Pw.length < 8 && "비밀번호는 8자리 이상이어야 합니다",
  };

  return { disabled, errors };
};
