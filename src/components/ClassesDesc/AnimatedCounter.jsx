import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ initialValue = 0, increment = 1, duration = 1000, color = "#007BFF" }) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + increment);
        }, duration);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [increment, duration]);

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Animated Counter</h1>
            <motion.div
                key={count} // Trigger re-render on count change
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color,
                }}
            >
                {count}
            </motion.div>
            <button
                onClick={() => setCount(count + increment)}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    backgroundColor: color,
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Increment
            </button>
        </div>
    );
};

export default AnimatedCounter;
