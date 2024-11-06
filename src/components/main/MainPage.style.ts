import styled, { css } from "styled-components";
import colors from "../color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${colors.pink1};
  color: ${colors.pink2};
`;

export const DateSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const DateText = styled.span`
  font-size: 20px;
`;

export const MealSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-right: 10px;
`;

export const MealControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControlButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  color: pink;
  border: 4px solid ${colors.pink3};
  border-radius: 5px;
  background-color: ${colors.pink1};
`;

export const SnackSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const SnackButton = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  ${({ selected }) =>
    selected
      ? css`
          border: 4px solid ${colors.pink3};
          border-radius: 5px;
          background-color: ${colors.pink3};
          color: black;
        `
      : css`
          border: 4px solid ${colors.pink3};
          border-radius: 5px;
          background-color: ${colors.pink1};
          color: black;
        `}
`;

export const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 16px;
  margin-left: 10px;
`;

export const MoodSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

export const MoodButton = styled.button<{ selected: boolean }>`
  font-size: 18px;
  cursor: pointer;
  ${({ selected }) =>
    selected
      ? css`
          border: 4px solid ${colors.pink3};
          border-radius: 5px;
          background-color: ${colors.pink3};
        `
      : css`
          border: 4px solid ${colors.pink3};
          border-radius: 5px;
          background-color: ${colors.pink1};
        `}
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;
