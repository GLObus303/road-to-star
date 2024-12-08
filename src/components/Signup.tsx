import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "./Signup.module.scss";
import Button from "./Button";
import LinkButton from "./LinkButton";
import CustomInput from "./CustomInput";
import { registerUser } from "../api/SignUp";

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const requestData = {
      email,
      name: `${firstName} ${lastName}`,
      password,
    };

    registerUser(requestData).then((response) => {
      if (response.ok) {
        router.push("/");
      }
    });
  };

  return (
    <div className={style.signup}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <CustomInput
          type="text"
          label="First name"
          id="firstName"
          value={firstName}
          setValue={setFirstName}
        ></CustomInput>
        <CustomInput
          type="text"
          label="Last name"
          id="lastName"
          value={lastName}
          setValue={setLastName}
        ></CustomInput>
        <CustomInput
          type="text"
          label="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
        ></CustomInput>
        <CustomInput
          type="password"
          label="Password"
          id="password"
          value={password}
          setValue={setPassword}
        ></CustomInput>
        <Button type="submit">SignUp</Button>
        <LinkButton href="/" className={style.linkButtonSignup}>
          Back
        </LinkButton>
      </form>
    </div>
  );
};

export default Signup;
