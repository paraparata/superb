import React from "react";
import styled from "@emotion/styled/macro";

const ButtonSuperb = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0.75rem 1rem;
  position: relative;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: none;
  border-radius: 0.5rem;
  box-shadow: inset -3px -4px var(--colors-shadow);
  font-size: 16px;
  font-weight: bold;
  text-align: ${(props) => props.align};

  :hover {
    left: -2px;
    top: -1px;
    box-shadow: inset -3px -4px var(--colors-shadow);
  }
  :active,
  :focus {
    left: 1px;
    top: 4px;
    box-shadow: inset 3px 4px var(--colors-shadow);
  }
`;

function Button({
  color = "var(--colors-text-dark)",
  background = "var(--colors-primary)",
  width = "100%",
  height = "100%",
  align = "center",
  onClick,
  children,
}) {
  return (
    <ButtonSuperb
      color={color}
      background={background}
      width={width}
      height={height}
      align={align}
      onClick={onClick}
    >
      {children}
    </ButtonSuperb>
  );
}

export default Button;
