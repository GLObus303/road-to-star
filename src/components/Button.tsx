import React from "react";
import type { ComponentProps, ReactNode } from "react";

import style from "./Button.module.scss";

type NativeButtonType = ComponentProps<"button">;

type ButtonProps = {
  type?: NativeButtonType["type"];
  onClick?: NativeButtonType["onClick"];
  children?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  ...props
}) => (
  <button type={type} onClick={onClick} className={style.button} {...props}>
    {children}
  </button>
);
