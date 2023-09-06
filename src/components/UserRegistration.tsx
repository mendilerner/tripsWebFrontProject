import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "./Services";
import { tUserConnect } from "./interfaces";
import Message from "./Message/Message";

const UserRegistration = () => {
  const Navigate = useNavigate();
  const [reqState, setReqState] = useState("before");
  const start: tUserConnect = { email: "", password: "", role: "admin" };
  const [values, setValues] = useState(start);

  const getHandler = (name: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const handleRegister = async () => {
      const connectMessage = await registerUser(values);
      if (connectMessage === 201) {
        const conf = confirm(
          "Created on successful registration you want log in"
        );
        if (conf) {
          await loginUser(values);
          setReqState("successes");
        }
      } else  {
        setReqState("error");
      }
      console.log(connectMessage);
    };
    handleRegister();
  };

  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
      </nav>
      <div>
        {reqState === "before" && (
          <form>
            <label htmlFor="email">email</label>
            <input
              id="email"
              type="text"
              value={values.email}
              onChange={getHandler("email")}
            />
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="text"
              value={values.password}
              onChange={getHandler("password")}
            />

            <button type="submit" onClick={handleSubmit}>
              sigh up
            </button>
          </form>
        )}
        {reqState === "successes" && (
          <Message
            onClick={() => Navigate("/trips")}
            message="logged in successfully"
            passTo="to trips"
          />
        )}
        {reqState === "error" && (
          <Message
            onClick={() => setReqState("before")}
            message="oops something got wrong"
            passTo="try again"
          />
        )}
      </div>
    </div>
  );
};

export default UserRegistration;
