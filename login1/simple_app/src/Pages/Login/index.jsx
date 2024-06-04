import PageTemplate from "../../Components/PageTemplate";
import image from "../../assets/login.png";
import style from "./index.module.css";
import React from "react";

const Login = () => {
    return(
        <>
            <PageTemplate form={<LoginForm/>} image={image} headerName={"Welcome back"}
                          PageTemplate message={"Log into your Dashboard"} buttonText={"Login"} />
        </>

    )
}

const  LoginForm = ()=>{
    return (
        <form>
            <input className={style.input} type="text" name="username" placeholder="Username" required={true}/>
            <input className={style.input} type="password" name="password" placeholder="Password" required={true}/>
        </form>
    )
}

export default Login;