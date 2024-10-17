import React, { useState } from "react";
import LabeledInput from "@molecules/LabeledInput";
import SubmittedData from "@atoms/SubmittedData";

type LoginFormProps = {}; // You can define props if needed

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const handleLogin = () => {
    setSubmittedData({ email, password });
  };

  return (
    <>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <LabeledInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {submittedData && (
        <SubmittedData
          email={submittedData.email}
          password={submittedData.password}
        />
      )}
    </>
  );
};

export default LoginForm;
