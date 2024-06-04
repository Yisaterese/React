
import style from "./index.module.css"
import React from "react";
import {Link} from "react-router-dom";



const PageTemplate = ({question,SignUpLink, image: images,image1,image2, headerName, message, messageClassName, buttonText, form, reminder1, reminder2, headerClassName }) => {
    return (
        <div className={style.container}>
            <img src={images}  alt={"im"}/>
            <div className={style.page}>
                <div className={headerClassName}>{headerName}</div>
                <div className={messageClassName}>{message}</div>
                <div>{form}</div>
                <div className={style.buttonText}>
                    <p>{question}</p>
                    <h4> <Link to="Login">{SignUpLink}</Link></h4>
                </div>
            </div>
        </div>
    );
};
export default PageTemplate;