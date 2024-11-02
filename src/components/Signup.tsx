import React, { useState } from "react";
import style from "./Signup.module.scss";
import Link from "next/link";

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("E-mail:", email);
    console.log("Password:", password);
  };

  return (
    <div className={style.login}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <div className={style.inputWrapper}>
          <label htmlFor="username">First name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={style.input}
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="username">Last name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={style.input}
          />
        </div>
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
          Sign up
        </button>
        <Link href="/">
          <button className={style.submitButton}>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
