import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import insta from "../../assets/insta.png"
// import Linkedin from "../../assets/linkedin.png"
const Footer = () =>{
    return (
        <>
            <div style={{display:"flex" ,justifyContent:"center", backgroundColor:"#b3e2ef",padding:"4%"}}>
                <div  style={{width:'50%',height:'30%',paddingLeft:"30%"}}>
                    <div style={{display:"BLOCK"}}>
                        <img src={facebook} alt="" style={{paddingRight:"8%"}}></img>
                        <img src={insta} alt="" style={{padding:"0 4% 0 4%"}}></img>
                        <img src={twitter} alt="" style={{paddingLeft:"8%"}}></img>
                        {/*<img src={Linkedin} alt=""></img>*/}
                        <p>Copyright ©2024 All rights reserved </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;