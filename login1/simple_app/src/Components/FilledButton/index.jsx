import React from 'react';
import style from './index.module.css';
import PageTemplate from "../PageTemplate";

const FilledButton = ({text,textColor,color}) => {
    return(
        <>
            <div style={{width:"67%"}}>
                <PageTemplate reminder1={"Remind me"} reminder2={"Forgot password"}/>
                <button className={style.btn} style={{color:textColor,backgroundColor:color}} >{text}</button>

            </div>
        </>
    )
}
export default FilledButton;