import {Outlet} from "react-router-dom";
import MidSection from "../../Pages/Home/MidSection";


const LayOut=()=>{
    return(
        <>
            {/*<NavBar/>*/}
            <Outlet/>
            {/*<Footer/>*/}
        </>
    )
}
export default LayOut