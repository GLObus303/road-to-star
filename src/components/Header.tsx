import React, { useContext } from "react";

import LinkButton from "./LinkButton";
import { UserContext } from "../context/userContext";
import Button from "./Button";
import style from "./Header.module.scss";

export const Header: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className={style.header}>
      <h1>RoadToStar</h1>
      {user ? (
        <div className={style.buttonGroup}>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      ) : (
        <div className={style.buttonGroup}>
          <LinkButton href="/login">Login</LinkButton>
          <LinkButton href="/signup">SignUp</LinkButton>
        </div>
      )}
    </div>
  );
};
