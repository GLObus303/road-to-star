import React from "react";

import LinkButton from "./LinkButton";
import style from "./Header.module.scss";

export const Header: React.FC = () => (
  <div className={style.header}>
    <h1>RoadToStar</h1>
    <div className={style.buttonGroup}>
      <LinkButton href="/login">Login</LinkButton>
      <LinkButton href="/signup">SignUp</LinkButton>
    </div>
  </div>
);
