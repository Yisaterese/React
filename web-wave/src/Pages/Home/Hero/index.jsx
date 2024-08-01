import style from "./index.module.css"
import {useEffect, useState} from "react";
import mountainPic from "../../../assets/mountainPic.png"
const Hero = () =>{
    const [isMobile, setISMobile] = useState(window.innerWidth<=750);
    useEffect(()=> {
        const handleResize=()=>{
            return window.innerWidth<= 750;
        }
        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize',handleResize)},[])
    return(
        <>
            <div className={style.mainBackground}>
                <div className={style.div1}>
                    <img className={style.mountainPic} src={mountainPic} alt=""></img>
                    <div className={style.div2}>
                        <h4>HOME</h4>
                        <h4 className={style.lightH4}>OFFER</h4>
                        <h4 className={style.lightH4}>GALLERY</h4>
                        <h4 className={style.lightH4}>BLOG</h4>
                        <h4 className={style.lightH4}>ABOUT US</h4>
                        <h4 className={style.lightH4}>CONTACT</h4>
                        <button className={style.button}> <span className={style.buttonText}>SIGN UP</span></button>
                    </div>
                </div>
                <div className={style.div1MidSection}>
                    <p>Adventures</p>
                    <h1 className={style.h1}>Let yourself be impressed</h1>
                    <button className={style.button1}> <span className={style.signUp}>SIGN UP</span></button>
                </div>
            </div>
        </>
    )
}

export default Hero;





