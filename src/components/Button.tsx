import React from "react";
import type { ComponentProps, ReactNode } from "react";

import style from "./Button.module.scss";

type NativeButtonType = ComponentProps<"button">;

type ButtonProps = {
  type?: NativeButtonType["type"];
  onClick?: NativeButtonType["onClick"];
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
}) => (
  <button type={type} onClick={onClick} className={style.button}>
    {children}
  </button>
);

export default Button;
