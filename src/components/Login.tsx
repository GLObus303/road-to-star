import React, { useState } from "react";
import style from "./Login.module.scss";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("E-mail:", email);
    console.log("Password:", password);
  };

  return (
    <div className={style.login}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={style.inputWrapper}>
          <label htmlFor="username">E-mail:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style.input}
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.input}
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Login
        </button>
        <Link href="/">
          <button className={style.submitButton}>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
