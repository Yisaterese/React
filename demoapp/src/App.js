import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Hero from "./Pages/Home/Hero";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Login/>} path={"/Login"}/>
          <Route element={<SignUp/>} path={"/SignUp"}/>
          {/*<Route element={<Hero/>} path={"/home"}/>*/}
        </Route>  
      </Routes>
    </BrowserRouter>    
    </>
  );
}


export default App;
