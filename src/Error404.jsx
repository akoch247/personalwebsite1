import React from "react";
import { motion } from "framer-motion";

export default function Error404() {
    return (
        <>
            <motion.div
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
                <section>
                    <h1>404</h1>
                    <p>Page not found</p>
                </section>
            </motion.div>
        </>
    );
}