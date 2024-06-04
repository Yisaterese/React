
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route>
                      <Route element={<Login/>} path={"/login"}/>
                      <Route element={<SignUp/>} path={"/sign-up"}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
