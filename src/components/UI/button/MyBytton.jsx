import React from "react";
import style from "./MyButton.module.scss";

const MyBytton = function ({children, ...props}) {

    return (
        <div>
            <button {...props} className={style.myBtn}>{children}</button>
        </div>
    );
};

export default MyBytton;