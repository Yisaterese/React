import dashboardImg from "../../../assets/dashboardImg.png"
import portrait from "../../../assets/portrait.png"
import malayalamType from "../../../assets/malayalamType.png"
const ThirdSection = () => {
    return(
        <>
            <div>
                <h3 style={{display: "block", paddingLeft: "4%"}}>Featured works</h3>
                <div style={{display: "flex", paddingLeft: "4%", gap:"4%"}}>
                    <div>
                        <img src={dashboardImg} alt=""></img>
                    </div>
                    <div >
                        <h3>Designing Dashboard</h3>
                        <button style={{color: "white", backgroundColor: "black", borderRadius: "8px"}}>2020</button>
                        <a style={{opacity:"0.5"}}> dashboard</a>
                        <h4>Designing an effective dashboard requires understanding
                            the user's needs and presenting data clearly through appropriate
                            visualizations. Organize information logically, ensure interactivity
                            and responsiveness, and optimize performance for scalability. Prioritize
                            security and privacy while gathering user feedback for continuous improvement.
                            This approach ensures a user-friendly, functional, and insightful dashboard.</h4>
                    </div>
                </div>
                <div style={{display: "flex", paddingLeft: "4%", gap:"4%",marginBlock:"5%"}}>
                    <div >
                        <img src={portrait} alt=""></img>
                    </div>
                    <div>
                        <h3>Vibrant portrait of 2024</h3>
                        <button style={{backgroundColor: "black", borderRadius: "8px", color: "white"}}>2024</button>
                        <a style={{opacity: "0.5"}}> Portrait</a>
                        <h4>
                            The "Vibrant Portrait of 2024" showcases a dynamic year
                            marked by rapid technological advancements, particularly
                            in AI and automation. Sustainability is central, with green
                            technologies and renewable energy becoming widespread.
                            Social movements enhance inclusivity and equality, while global
                            connectivity fosters collaboration and cultural exchange.
                            This portrait captures a world thriving on innovation, diversity,
                            and a collective push toward a brighter future.</h4>
                    </div>
                </div>
                <div style={{display: "flex", paddingLeft: "4%", gap: "4%"}}>
                    <div>
                        <img src={malayalamType} alt=""></img>
                    </div>
                    <div>
                        <h3>365 days with Malayalam type</h3>
                        <button style={{backgroundColor: "black", borderRadius: "8px", color: "white"}}>2018</button>
                        <a style={{opacity:"0.5"}}>  Typography</a>
                        <h4>365 Days with Malayalam: A Year of Cultural Immersion
                            "365 Days with Malayalam" is a journey into the heart of
                            Kerala's rich linguistic and cultural heritage. Each day
                            unveils the beauty of the Malayalam language through literature,
                            music, cinema, and everyday conversations. This immersive
                            experience deepens appreciation for the nuances of the language
                            and the vibrant traditions it carries. By the end of the year,
                            participants gain a profound connection to Kerala's culture and the
                            timeless charm of Malayalam.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdSection