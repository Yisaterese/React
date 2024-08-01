import Home from '../Pages/Home';
import Layout from '../Component/Layout';
import Hero from "../Pages/Home/Hero";
import MidSection from "../Pages/Home/MidSection";
export const  ROUTES = [{
    path:"/",
    element:<Home/>,
    children:[
        {
            path:"",
            element:<Hero/>
        },
        {
            path:"",
            element: <MidSection/>
        },
        {
            path:"",
            element:<Layout/>
        }

    ]
}]