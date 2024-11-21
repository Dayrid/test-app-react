import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AuthContext } from "../../../context";
import { useContext } from "react";
import MyBytton from "../button/MyBytton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className={styles.navbar}>
      <MyBytton onClick={logout}>Logout</MyBytton>
      <div className={styles.navbar__links}>
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
