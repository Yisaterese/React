import myPicture from "../../../assets/myPicture.JPG"
import style from "./index.module.css"
import myPic from "./index.module.css"
const Hero = () =>{
    return(
        <>
            <div className={style.majorDiv}>
                <div className={style.textDiv1}>
                    <div>
                        <h1>Hi, I am Joseph, <br/>passionate software engineer</h1>
                        I am a passionate software engineer with a knack for solving complex problems through innovative
                        <br/>coding solutions. With a solid foundation in full-stack development, I thrive in dynamic
                        environments
                        <br/>and excel at collaborating with cross-functional teams. My expertise spans from backend
                        <br/>
                        I am a passionate software engineer with a knack for solving complex problems through innovative
                        coding solutions. With a solid foundation in full-stack development, I thrive in dynamic
                        environments and excel at collaborating with cross-functional teams. My expertise spans from
                        backend infrastructure to front-end design, ensuring seamless user experiences. Constantly
                        learning and
                        <br/>adapting, I embrace new technologies to drive impactful results.
                    </div>
                    <button className={style.button}>Download
                        Resume
                    </button>
                </div>
                <div  className={style.picStyle}>
                    <img src={myPicture} className={style.myPic} alt=""></img>
                </div>
            </div>

        </>
    )
}

export default Hero