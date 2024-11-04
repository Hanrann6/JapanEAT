import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../bar/NavBar";
import * as S from "./LoginPage.style";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직 추가
    console.log("로그인 정보:", { email, password });

    navigate("/");
  };

  return (
    <S.Container>
      <NavBar />
      <S.Title>로그인</S.Title>
      <S.Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
    </S.Container>
  );
};

export default LoginPage;
