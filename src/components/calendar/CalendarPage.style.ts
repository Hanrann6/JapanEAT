import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
  border: 1px solid #ddd;
  background-color: white;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FooterButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
`;
