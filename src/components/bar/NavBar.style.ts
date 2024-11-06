import styled from "styled-components";
import colors from "../color";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
  font-size: 30px;
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
  color: ${colors.pink2}
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
  border: 4px solid ${colors.pink3};
  background-color: ${colors.pink2};
  border-radius: 15px;

  &:hover {
    background-color: ${colors.pink1};
  }
`;

export const CalendarButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
  border: 4px solid ${colors.pink3};
  border-radius: 5px;
  background-color: ${colors.pink1};
`;
