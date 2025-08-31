import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Particles from "./Particles";

export default function Layout() {
    return (
        <div className="layout-background">
            <div className="container-fluid d-flex justify-content-center align-items-center py-5">
                <div className="card custom-card text-light shadow-lg rounded-4 px-5 pt-3 border-0 w-90">
                    <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
                        <Particles
                            particleColors={['#1D1773', '#0d1117']}
                            particleCount={400}
                            particleSpread={10}
                            speed={0.08}
                            particleBaseSize={100}
                            moveParticlesOnHover={false}
                            alphaParticles={false}
                            disableRotation={true}
                        />
                    </div>
                    <Navbar />
                    <main className="mt-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>     
        );
}