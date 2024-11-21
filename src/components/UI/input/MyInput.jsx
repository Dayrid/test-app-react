import React from "react";
import style from "./MyInput.module.scss";


const MyInput = function ({...props}) {

    return (
        <div>
            <input {...props} className={style.myInput}></input>
        </div>
    );
};

export default MyInput;