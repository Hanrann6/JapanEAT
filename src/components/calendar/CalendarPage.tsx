import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../bar/NavBar";
import * as S from "./CalendarPage.style";

export const CalendarPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };

  const handleDateClick = (date: Date) => {
    // 날짜 클릭 시 해당 날짜의 메인 페이지로 이동
    const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`;
    navigate(`/?date=${formattedDate}`);
  };

  const goToWeightTrendPage = () => {
    navigate("/weight-trend");
  };

  return (
    <S.Container>
      <NavBar />
      <S.MonthSection>
        <S.ArrowButton onClick={goToPreviousMonth}>◀</S.ArrowButton>
        <S.MonthLabel>
          {currentMonth.getFullYear()} /{" "}
          {(currentMonth.getMonth() + 1).toString().padStart(2, "0")}
        </S.MonthLabel>
        <S.ArrowButton onClick={goToNextMonth}>▶</S.ArrowButton>
      </S.MonthSection>

      <S.CalendarGrid>
        {Array.from({ length: 30 }, (_, i) => {
          const date = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            i + 1
          );
          return (
            <S.DateButton key={i} onClick={() => handleDateClick(date)}>
              {date.getDate()}
            </S.DateButton>
          );
        })}
      </S.CalendarGrid>

      <S.FooterButton onClick={goToWeightTrendPage}>
        몸무게 추세 보기
      </S.FooterButton>
    </S.Container>
  );
};

export default CalendarPage;
