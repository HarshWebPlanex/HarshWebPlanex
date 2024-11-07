import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons from react-icons

const Register = () => {
    const [name, setName] = useState(""); // New state for name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigate = useNavigate();

    const handleRegister = () => {
        // Store user data temporarily in localStorage
        const userData = { name, email, password };
        localStorage.setItem("user", JSON.stringify(userData)); // Store data as JSON

        // Navigate to login page
        setMessage("Registration successful! Please login.");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the visibility of password
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <div style={styles.passwordContainer}>
                    <input
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <span onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icon for password visibility */}
                    </span>
                </div>
                <button onClick={handleRegister} style={styles.button}>Register</button>
                {message && <p style={styles.successMessage}>{message}</p>}
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
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
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
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
        transition: "background-color 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#218838",
    },
    successMessage: {
        color: "green",
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

export default Register;
