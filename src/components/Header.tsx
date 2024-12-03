import React from "react";
import style from "./Header.module.scss";
import LinkButton from "./LinkButton";

export const Header: React.FC = () => (
  <div className={style.header}>
    <h1>RoadToStar</h1>
    <div className={style.buttonGroup}>
      <LinkButton href="/login">Login</LinkButton>
      <LinkButton href="/signup">SignUp</LinkButton>
    </div>
  </div>
);
