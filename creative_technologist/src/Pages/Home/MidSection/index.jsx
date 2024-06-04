import style from "./index.module.css"



const MidSection = () => {
    return(
        <>
            <div style={{backgroundColor:"#b3e2ef", paddingBottom:"5%"}}>
                <div  className={style.textContainer2}>
                    <h4>Recent posts</h4>
                    <h4>View all</h4>
                </div>
                <div style={{justifyContent:"space-between", display:"flex",padding:"0 4% 0 4%",gap:"5%"}}>
                    <div style={{backgroundColor:"#ffffff",borderRadius:"10px",padding:"0 4% 0 4%"}} >
                        <h3>Making a design system from<br/> scratch </h3>
                        <h4>As a software engineer, I create design systems for consistency and efficiency. I audit UI elements,<br/>
                                    establish design principles with designers, and build modular components using frameworks like<br/>
                                    React and Spring Boot. Tools like Storybook aid development, and CI/CD pipelines manage updates.<br/>
                                    Regular reviews ensure a cohesive user experience and improve development speed.
                        </h4>
                    </div>
                    <div style={{backgroundColor:"#ffffff",borderRadius:"10px",padding:"0 4% 0 4%"}}>
                        <h3>Creating pixel perfect icons<br/> in figma</h3>
                        <h4>As a software engineer, I create pixel-perfect icons in Figma by using consistent grids, aligning<br/>
                                    vectors to the pixel grid, optimizing element placement, and exporting at the right resolution and<br/>
                                    format.
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MidSection