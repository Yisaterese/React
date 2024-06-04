import style from "./index.module.css"
const FillButton=({color, text,textColor})=>{
    return(

        <>
            <button className={style.btn} style={{background:color, color:textColor}}>{text}</button>
        </>
    )
}
export default FillButton;