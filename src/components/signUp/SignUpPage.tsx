import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SignUpPage.style";
import NavBar from "../bar/NavBar";

export const SignUpPage: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    // 회원가입 처리 로직 추가
    console.log("회원가입 정보:", {
      nickname,
      email,
      password,
      currentWeight,
      goalWeight,
    });

    navigate("/");
  };

  return (
    <S.Container>
      <NavBar />
      <S.Title>회원가입</S.Title>
      <S.Input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <S.Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="패스워드"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Input
        type="text"
        placeholder="현재 몸무게 (kg)"
        value={currentWeight}
        onChange={(e) => setCurrentWeight(e.target.value)}
      />
      <S.Input
        type="text"
        placeholder="목표 몸무게 (kg)"
        value={goalWeight}
        onChange={(e) => setGoalWeight(e.target.value)}
      />
      <S.SignUpButton onClick={handleSignUp}>회원가입</S.SignUpButton>
    </S.Container>
  );
};

export default SignUpPage;
