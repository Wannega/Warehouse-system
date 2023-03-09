"use client";

import { SearchIcon, VisibilityIcon } from "@icons";
import { useState } from "react";
import { styled } from "styled-components";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  withVisibility?: boolean;
  Icon?: JSX.Element;
}

export const Input: React.FC<Props> = ({ withVisibility, ...props }) => {
  const [isVisible, setVisible] = useState(false);
  const togglePassVisibility = () => setVisible((state) => !state);

  const withSearch = props.type === "search";

  return (
    <Box>
      <SearchIcon/>
      <StyledInput
        {...props}
        type={withVisibility && isVisible ? "text" : props.type}
      />
      {withVisibility && <VisibilityIcon onClick={togglePassVisibility} />}
    </Box>
  );
};

const Box = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #cacaca;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.25s;
`;
const StyledInput = styled.input`
  font-size: 1.4ch;
  box-shadow: 0 0 0px 1000px white inset;
  flex: 1;
`;
