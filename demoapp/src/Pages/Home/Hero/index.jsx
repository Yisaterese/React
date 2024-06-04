// import FillButton from "../../../Component/FillButton";
// import {useState} from "react";
//
// const Hero=()=>{
//     const [color]=useState("red");
//     const [car,setCar]=useState({
//         model:"Ford",
//         year:"2023",
//         color:"blue",
//         brand:"Mustang"
//     });
//     const  updateColor=()=>{
//         setCar(previousState=>{
//             return{...previousState,color: "blue"}
//         });
//     }
//     return(
//         <>
//             <FillButton color={"red"} text={"john"}/>
//             <FillButton color={"blue"} text={"Balaji"}/>
//             <FillButton color={"yellow"} text={"sussan"}>textColor</FillButton>
//             <h1>Bola likes {color} color!</h1>
//             <button onClick={updateColor}>Blue</button>
//             <h1>It is a {car.model} {car.brand} with color {car.color}</h1>
//             <p>Hello world</p>
//         </>
//     )
// }
// export default Hero;