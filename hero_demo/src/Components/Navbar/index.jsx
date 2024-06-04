import logo from "../../asset/logo.png"
import Illustration from "../../asset/Illustration.png"
const Navbar = () =>{
    return(
        <>
            <div >
                <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                    <img src={logo} alt="logo"/>
                    <h2 style={{color:"#263238",fontSize: "30px"}}>Nexcent</h2>
                </div>

                <div >
                    <a href="https://chat.openai.com/" target="_blank"><p>Home</p></a>
                    <p>Features</p>
                    <p>Community</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <button style={{color: "#4caf4f", background: "none", border: "none", fontSize: "16px", fontWeight: "500" }}>Login</button>
                    <button style={{padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff", border: "none"}}>SignUp</button>
                </div>
            </div>
            <div>
                <div>
                    <h1>Lessons and insights <span style="color: #4caf4f; display: block">from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button style={{color: "white", background: "#4caf4f", border: "none", borderRadius: "5px", padding: "15px 30px"}}>Register</button>
                </div>
                <img src={Illustration} alt=""/>
            </div>
        </>
    )
}
export default Navbar;