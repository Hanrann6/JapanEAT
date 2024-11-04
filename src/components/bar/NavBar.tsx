import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./NavBar.style";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로가기 기능
  };

  const handleLoginClick = () => {
    navigate("/login"); // login 경로로 이동
  };

  const handleSignUpClick = () => {
    navigate("/signUp"); // /signUp 경로로 이동
  };

  return (
    <S.Header>
      <S.BackButton onClick={handleBack}>← </S.BackButton>
      <S.Title>JapanEAT</S.Title>
      <S.ButtonContainer>
        <S.Button onClick={handleLoginClick}>로그인</S.Button>
        <S.Button onClick={handleSignUpClick}>회원가입</S.Button>
      </S.ButtonContainer>
    </S.Header>
  );
};

export default NavBar;
