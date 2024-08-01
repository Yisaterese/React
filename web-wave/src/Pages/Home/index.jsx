import Hero from './Hero';
import MidSection from "./MidSection";

const Home = () => {
    return(
        <>
            <div>
                <Hero/>
                <div style={{display:"grid",paddingTop:"50rem"}}>
                    <MidSection/>
                </div>
            </div>

        </>

    )
}
export default Home