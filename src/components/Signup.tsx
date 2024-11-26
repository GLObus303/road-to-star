import React, { useState } from "react";
import style from "./Signup.module.scss";
import Button from "./Button";
import LinkButton from "./LinkButton";
import TextInput from "./TextInput";

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
    <div className={style.signup}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <TextInput
          label="First name"
          id="firstName"
          value={firstName}
          setValue={setFirstName}
        ></TextInput>
        <TextInput
          label="Last name"
          id="lastName"
          value={lastName}
          setValue={setLastName}
        ></TextInput>
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
        <Button type="submit">SignUp</Button>
        <LinkButton href="/" className={style.linkButtonSignup}>
          Back
        </LinkButton>
      </form>
    </div>
  );
};

export default Signup;
