import React from "react";
import type { ComponentProps, ReactNode } from "react";
import style from "./Button.module.scss";

type NativeButtonType = ComponentProps<"button">;

type ButtonProps = {
  type?: NativeButtonType["type"];
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type = "button", children }) => {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
