
import style from "./index.module.css"
import logo0 from "../../../asset/Logo(0).png"
import logo1 from "../../../asset/Logo (1).png"
import logo2 from "../../../asset/Logo (2).png"
import logo3 from "../../../asset/Logo (3).png"
import logo4 from "../../../asset/Logo (4).png"
import logo5 from "../../../asset/Logo (5).png"
import {members} from "./data";

const Clients = () => {

    return (
        <>
            <div className={style.client}>
                <h4>Our Clients</h4>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                    <img src={logo0} alt=""/>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                </div>
            </div>
            <div className={style.member}>
                <p>Manage your entire community in a single system</p>
                <h6>Who is Nextcent suitable for?</h6>
            </div>

            <div className={style.member2}>
                {
                    members.map((value, index) => (
                        <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                            <img src={value.image} alt={""}/>
                            <h2>{value.title}</h2>
                            <p style={{width: "50%", textAlign: "center"}}>
                                {value.text}
                            </p>
                        </div>
                    ))}
            </div>
        </>
    )
}
export default Clients;
