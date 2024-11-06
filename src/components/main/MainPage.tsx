import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../bar/NavBar";
import * as S from "./MainPage.style";

export const MainPage: React.FC = () => {
  const [mealCount, setMealCount] = useState(0);
  const [snack, setSnack] = useState<"O" | "X">("X");
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");
  const [mood, setMood] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleCalendarClick = () => {
    navigate("/calendar"); // /calendar 경로로 이동
  };

  const handleSaveClick = () => {
    navigate("/calendar");
    alert("오늘의 기록이 저장되었습니다!");
  };

  const handleReset = () => {
    setMealCount(0);
    setSnack("X");
    setCalories("");
    setWeight("");
    setMood(null);
  };

  return (
    <S.Container>
      <NavBar />
      <S.DateSection>
        <S.DateText>2024/11/04</S.DateText>
      </S.DateSection>

      <S.MealSection>
        <S.Label>식사 {mealCount}회</S.Label>
        <S.MealControl>
          <S.ControlButton onClick={() => setMealCount(mealCount + 1)}>
            ▲
          </S.ControlButton>
          <S.ControlButton onClick={() => setMealCount(mealCount - 1)}>
            ▼
          </S.ControlButton>
        </S.MealControl>
      </S.MealSection>

      <S.SnackSection>
        <S.SnackButton selected={snack === "X"} onClick={() => setSnack("X")}>
          간식 X
        </S.SnackButton>
        <S.SnackButton selected={snack === "O"} onClick={() => setSnack("O")}>
          간식 O
        </S.SnackButton>
      </S.SnackSection>

      <S.InputSection>
        <S.Label>오늘의 칼로리:</S.Label>
        <S.Input
          type="text"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="칼로리를 입력하세요"
        />{" "}
        kcal
      </S.InputSection>

      <S.InputSection>
        <S.Label>오늘의 몸무게:</S.Label>
        <S.Input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="몸무게를 입력하세요"
        />{" "}
        Kg
      </S.InputSection>

      <S.MoodSection>
        <S.Label>오늘 평점:</S.Label>
        {[1, 2, 3, 4, 5].map((value) => (
          <S.MoodButton
            key={value}
            selected={mood === value}
            onClick={() => setMood(value)}
          >
            {value} 😊
          </S.MoodButton>
        ))}
      </S.MoodSection>

      <S.ButtonSection>
        <S.ResetButton onClick={handleReset}>초기화</S.ResetButton>
        <S.SaveButton onClick={handleSaveClick}>저장</S.SaveButton>
      </S.ButtonSection>
    </S.Container>
  );
};

export default MainPage;
