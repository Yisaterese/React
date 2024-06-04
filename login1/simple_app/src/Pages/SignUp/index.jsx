import React from 'react';
import FilledButton from "../../Components/FilledButton";
import PageTemplate from "../../Components/PageTemplate";
import  image from "../../assets/signUp.png"
import style from "./index.module.css";
const SignUpPage = () => {
    return(
        <>
            <div>
                <PageTemplate form={<SignUpForm/>} image={image} heading={"Sign Up"}
                          message={"Sign up by entering the  information below"} buttonText={"Sign-up"}/>
                <FilledButton text={"sign-up"} />
            </div>
            </>

    )
}

const SignUpForm = ()=>{
    return(
        <>
            <form>
                <input className={style.input} type="text" name="username" placeholder="Username" required={true}/>
                <input className={style.input} type="password" name="password" placeholder="Password" required={true}/>
                <input className={style.input} type="email" name="email" placeholder="Email" required={true}/>
            </form>
        </>
    )
}


export default SignUpPage;
