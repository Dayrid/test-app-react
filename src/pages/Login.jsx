import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyBytton from "../components/UI/button/MyBytton";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts");
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="username"
        ></MyInput>
        <MyInput
          type="password"
          placeholder="password"
        ></MyInput>
        <MyBytton onClick={login}>Login</MyBytton>
      </form>
    </div>
  );
};

export default Login;
