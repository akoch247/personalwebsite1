import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <motion.div
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
                <section>
                    <h1>Home</h1>
                </section>
            </motion.div>
        </>
    );
}