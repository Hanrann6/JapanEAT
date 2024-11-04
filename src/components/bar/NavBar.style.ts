import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const BackButton = styled.button`
  position: absolute; // 위치를 절대적으로 설정
  top: 10px; // 위쪽 여백
  left: 10px;
  font-size: 30px;
  background: none;
  border: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-self: flex-end;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
