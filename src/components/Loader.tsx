import React from "react";
import style from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={style.loader}>
      <h1>LOADING ...</h1>
    </div>
  );
};