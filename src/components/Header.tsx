import React from "react";
import style from "./Header.module.scss";
import Link from "next/link";

export const Header: React.FC = () => (
  <div className={style.header}>
    <h1>RoadToStar</h1>
    <div className={style.buttonGroup}>
      <Link href="/login">
        <button className={style.button}>Login</button>
      </Link>
      <Link href="/signup">
        <button className={style.button}>Signup</button>
      </Link>
    </div>
  </div>
);
