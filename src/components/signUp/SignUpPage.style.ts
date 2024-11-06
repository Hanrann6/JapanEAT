import styled from "styled-components";
import colors from "../color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${colors.pink1};
  color: ${colors.pink2};
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 4px solid ${colors.pink3};
  border-radius: 15px;
  font-size: 16px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: ${colors.pink2};
  color: black;
  border: 4px solid ${colors.pink2};
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.pink1};
  }
`;
