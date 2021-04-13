import React, { ButtonHTMLAttributes, JSXElementConstructor } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "super" | "blok" | "full";
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  variant = "super",
  disabled,
  Component = "button",
  children,
  ...props
}) => {
  const classNames = cn(styles.button, {
    [styles["button-super"]]: variant === "super",
    [styles["button-blok"]]: variant === "blok",
    [styles["button-full"]]: variant === "full",
    [styles["button-disabled"]]: disabled,
  });

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};

export default Button;
