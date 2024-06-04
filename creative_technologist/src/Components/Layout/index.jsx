
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import style from "./index.module.css";

const Layout = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 796);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 796);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={style.layoutContainer}>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
