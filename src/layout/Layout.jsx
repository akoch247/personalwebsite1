import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import DarkVeil from "./DarkVeil";
import "./Layout.css";

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

            <div className="container py-5">
                <div className="card custom-card text-light shadow-lg rounded-4 p-4 border-0">
                    <Navbar />
                    <main className="mt-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}