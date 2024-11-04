import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DateSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const DateText = styled.span`
  font-size: 18px;
`;

export const CalendarButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
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
          background-color: #007bff;
          color: white;
        `
      : css`
          background-color: #f0f0f0;
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
          background-color: #ffcc00;
        `
      : css`
          background-color: #f0f0f0;
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
