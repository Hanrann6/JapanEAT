import styled from "styled-components";
import colors from "../color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${colors.pink1};
  color: ${colors.pink2};
`;

export const MonthSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const MonthLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
`;

export const ArrowButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  color: ${colors.pink2};
  background-color: ${colors.pink1};
  border: none;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-top: 10px;
`;

export const DateButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border: 4px solid ${colors.pink3};
  border-radius: 5px;
  background-color: white;

  &:hover {
    background-color: ${colors.pink3};
  }
`;

export const FooterButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${colors.pink2};
  color: white;
  border: 5px solid ${colors.pink3};
  border-radius: 15px;
  cursor: pointer;
`;
