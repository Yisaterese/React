import style from "./index.module.css"
const FilledButton = ({color, text, textColor}) => {

    return(
        <div>
            <button className={style.btn} style={{background: color, color: textColor}}>{text}</button>
        </div>
    )
}
export default FilledButton;