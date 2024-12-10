import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "./Button";
import LinkButton from "./LinkButton";
import CustomInput from "./CustomInput";
import { registerUser } from "../api/signUp";
import style from "./Signup.module.scss";

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await registerUser({
      email,
      name: `${firstName} ${lastName}`,
      password,
    });

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div className={style.signup}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <CustomInput
          label="First name"
          id="firstName"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          label="Last name"
          id="lastName"
          value={lastName}
          setValue={setLastName}
        />
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
        <Button type="submit">SignUp</Button>
        <LinkButton href="/" className={style.linkButtonSignup}>
          Back
        </LinkButton>
      </form>
    </div>
  );
};

export default Signup;
