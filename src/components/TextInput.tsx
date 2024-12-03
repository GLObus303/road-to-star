import React from "react";
import style from "./TextInput.module.scss";

type TextInputProps = {
  label: string;
  id: string;
  value: string;
  setValue: (value: string) => void;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  value,
  setValue,
}) => {
  return (
    <div className={style.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={style.input}
      />
    </div>
  );
};

export default TextInput;
