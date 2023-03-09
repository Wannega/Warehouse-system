"use client";

import { styled } from "styled-components";
import { prop, switchProp } from "styled-tools";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: "filled" | "outlined";
}

type StyledProps = Pick<Props, "variant">;

export const Button: React.FC<Props> = ({ ...props }) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${switchProp(
    "variant",
    { filled: prop("theme.button.color"), outlined: "black" },
    "black"
  )};
  padding: 11px 16px;
  border-radius: 10px;
  background-color: ${switchProp(
    "variant",
    { filled: prop("theme.button.bg"), outlined: "white" },
    "white"
  )};
  border: 1px solid #e6e6e6;
`;
