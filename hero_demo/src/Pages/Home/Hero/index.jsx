import style from "./index.module.css"
import illustration from "../../../asset/Illustration.png"
const  Hero=()=>{
    return (
        <>
           <div className={style.heroSection}>
               <div>
                   <h1>Lesson and insights<span style={{color:"#4caf4f",display:"block"}}>from 8 years</span></h1>
                    <p>Where to grow your business as a photo: site or social media?</p>
                   <button style={{color:"white", background:"#4caf4f", border:"none", borderRadius:"5px",padding:"15px 30px"}}>Register</button>
               </div>
           <img src={illustration}/>
           </div>
        </>
    )
}
export default Hero;