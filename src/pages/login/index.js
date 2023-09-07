import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import ToyButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ToyInput from "../../components/Input";
import useInput from "../../hooks/custom-input";
import { validate } from "../../utils/validate";

const LoginPage = () => {
  const navigate = useNavigate();

  // onSubmit form
  const onLoginHandler = (e) => {
    e.preventDefault();
    const { Email, Pw } = e.target;
    if (Email.value === "test@test.com" && Pw.value === "test1234") {
      navigate("/board");
    } else {
      alert("아이디와 비밀번호를 다시 한 번 확인해주세요");
    }
  };

  const [{ Email, Pw }, onChangeInput] = useInput({
    Email: "",
    Pw: "",
  });

  const { disabled, errors } = validate({ Email, Pw });
  console.log(disabled, errors);
  return (
    <S.Wrapper onSubmit={onLoginHandler}>
      <h2>LOGO</h2>
      <ToyInput isValid={!Email.includes("@")} error={"이메일 양식이 맞지 않습니다"} type="text" placeholder="이메일을 입력해주세요" name="Email" onChange={onChangeInput} label={"이메일"} />
      <ToyInput isValid={Pw.length < 8} error={"비밀번호는 8자리 이상입니다"} type="password" placeholder="비밀번호를 입력해주세요" name="Pw" onChange={onChangeInput} label={"비밀번호"} />
      <ToyButton disabled={!Email.includes("@") || Pw.length < 8}>로그인</ToyButton>
    </S.Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.form`
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
`;

const S = {
  Wrapper,
};

//
