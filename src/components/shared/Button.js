import React from "react";

function Button({
  color = "dark",
  background = "primary",
  width = "100%",
  height = "100%",
  align = "center",
  onClick = () => {},
  children,
}) {
  return (
    <button
      className={`btn color-text-${color} color-bg-${background} text-align-${align}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
