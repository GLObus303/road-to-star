import React from "react";
import style from "./CustomInput.module.scss";

type CustomInputProps = {
  type: string;
  label: string;
  id: string;
  value: string;
  setValue: (value: string) => void;
};

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  id,
  value,
  setValue,
}) => {
  return (
    <div className={style.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={style.input}
      />
    </div>
  );
};

export default CustomInput;
