import React from 'react';
import FilledButton from "../FilledButton";
import style from "./index.module.css";

const PageTemplate =({image,headerName,message,buttonText,form})=>{
    return(
        <>
            <div className={style.container}>
                <img src={image}  alt="img"></img>
                <div>
                    <h1 className={style.page}>{headerName}</h1>
                    <p className={style.message}>{message}</p>
                    {form}
                    <FilledButton  color="#55229e" text={buttonText} textColor="white"/>
                </div>

            </div>
        </>
    )
}
export default PageTemplate;