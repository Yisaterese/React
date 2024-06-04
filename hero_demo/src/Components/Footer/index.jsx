import logo from "../../asset/LogoN.png"
import insta from "../../asset/insta.png"
import web from "../../asset/web.png"
import youtube from "../../asset/youtube.png"
import twitter from "../../asset/twitter.png"
import send from "../../asset/send.png"
import style from "./index.module.css"
const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div>
                    <img src={logo} alt=""/>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p><div>
                        <img src={insta}  alt=""/>
                        <img src={web}  alt=""/>
                        <img src={twitter}  alt=""/>
                        <img src={youtube}  alt=""/>
                    </div>
                </div>
                <div className={style.footerSide}>
                    <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={send} className={style.image}  alt=""/>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;