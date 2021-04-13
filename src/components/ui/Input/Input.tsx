import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  prefix?: any;
  suffix?: any;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (...args: any[]) => any;
}

const Input: React.FC<Props> = ({
  className,
  prefix,
  suffix,
  placeholder,
  disabled,
  onChange,
  ...props
}) => {
  const classNames = cn(
    styles.input,
    {
      [styles.disabled]: disabled,
    },
    className
  );

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <label className={classNames}>
      {prefix}
      <input
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleOnChange}
        {...props}
      />
      {suffix}
    </label>
  );
};

export default Input;
