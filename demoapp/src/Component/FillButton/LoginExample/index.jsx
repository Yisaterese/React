import style from './index.module.css';
const FillButton = ({text,textColor,color}) =>{
    return(
        <>
            <div style={{width: "67%"}}>
                <button className={style.btn} style={{color:textColor,backgroundColor:color}} >{text}</button>
            </div>
        </>
    )
}

export default FillButton;