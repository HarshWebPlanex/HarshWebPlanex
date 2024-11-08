import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the eye icons

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false); // New state to toggle password visibility
    const [loading, setLoading] = useState(false); // State for loader
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true); // Start loading

        // Simulate a 2-second loader delay
        setTimeout(() => {
            // Retrieve user data from localStorage
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                // If credentials match, call the onLogin function passed from App.js
                onLogin(true); // Pass success to parent component (App.js)
                navigate("/dashboard"); // Redirect to home page
            } else {
                // If credentials don't match, show error message
                setMessage("Invalid credentials. Please register.");
            }
            setLoading(false); // Stop loading after 2 seconds
        }, 2000);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the visibility
    };

    return (
        <div style={styles.container}>
            {/* Loader overlay */}
            {loading && <div style={styles.overlay}>
                <div style={styles.loader}>Loading...</div>
            </div>}

            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <div style={styles.passwordContainer}>
                    <input
                        type={showPassword ? "text" : "password"} // Toggle between password and text
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <span onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show eye slash or eye based on state */}
                    </span>
                </div>
                <button onClick={handleLogin} style={styles.button}>Login</button>
                {message && <p style={styles.errorMessage}>{message}</p>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        position: "relative", // Allow positioning of the overlay
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Ensure the overlay is on top of the form
    },
    loader: {
        fontSize: "40px", // Make the text large
        color: "#fff", // White text color
        fontWeight: "bold",
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
        zIndex: 1, // Make sure the form is above the loader
    },
    heading: {
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "20px",
        color: "#333",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "16px",
    },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
        transition: "background-color 0.3s ease",
    },
    errorMessage: {
        color: "red",
        marginTop: "10px",
        fontSize: "14px",
    },
    passwordContainer: {
        position: "relative", // This will allow positioning the eye icon over the input
    },
    eyeIcon: {
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "20px",
        color: "#007bff",
    },
};

export default Login;
