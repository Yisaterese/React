import Home from '../Pages/Home'
import Layout from "../Components/Layout";
export const ROUTES =[
    {
        path: "/",
        element: <Layout/>,
        children :[
            {
                path: "",
                element: <Home/>
            }, {
                path: "home",
                element: <Home/>
            },{
                path: "midSection",
                element: <Home/>
            },{
                path: "thirdSection",
                element: <Home/>
            }


        ]
    }
]