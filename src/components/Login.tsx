import React, { useState } from "react";
import style from "./Login.module.scss";
import Button from "./Button";
import LinkButton from "./LinkButton";
import TextInput from "./TextInput";

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
        <TextInput
          label="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
        ></TextInput>
        <TextInput
          label="Password"
          id="password"
          value={password}
          setValue={setPassword}
        ></TextInput>
        <Button type="submit">Login</Button>
        <LinkButton href="/" className={style.linkButtonLogin}>
          Back
        </LinkButton>
      </form>
    </div>
  );
};

export default Login;
