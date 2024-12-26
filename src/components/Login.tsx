/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import { Button } from "./Button";
import { LinkButton } from "./LinkButton";
import { CustomInput } from "./CustomInput";
import { login } from "../api/login";
import { getCurrentUser } from "../api/getCurrentUser";
import { UserContext } from "../context/UserContextProvider";
import style from "./Login.module.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");

      return;
    }

    setError("");

    const token = await login(email, password);

    const currentUserResponse = await getCurrentUser(token);

    if (!currentUserResponse.ok) {
      setError("Wrong email or password");

      return;
    }

    const userData = await currentUserResponse.json();
    setUser(userData);

    router.push("/");
  };

  return (
    <div className={style.login}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <CustomInput
          label="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          type="password"
          label="Password"
          id="password"
          value={password}
          setValue={setPassword}
        />
        <Button type="submit">Login</Button>
        <LinkButton href="/" className={style.linkButtonLogin}>
          Back
        </LinkButton>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
