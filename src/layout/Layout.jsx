import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import DarkVeil from "./DarkVeil";

export default function Layout() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{
                position: "fixed", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                zIndex: -1
            }}>
                <DarkVeil />
            </div>

            <div className="make-pot-container rounded p-4" 
                    style={{
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "50px auto",
                        minHeight: "600px",
                        backgroundColor: "#4B0082",
                    }}>
                <Navbar />
                <main className="mt-3">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}