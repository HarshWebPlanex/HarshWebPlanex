import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FaUsers, FaTachometerAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

// Extracted styles for reusability
const styles = {
    container: {
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center"
    },
    button: {
        display: "inline-block",
        padding: "12px 20px",
        margin: "10px",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },
    dashboardButton: {
        backgroundColor: "#007bff",
    },
    usersButton: {
        backgroundColor: "#28a745",
    },
    alert: {
        marginTop: "20px",
        fontSize: "1rem",
    }
};

// Reusable button component
const NavButton = ({ path, label, icon: Icon, isAuth, onRedirect, style }) => (
    <div
        style={{ ...styles.button, ...style }}
        onClick={() => onRedirect(path)}
        role="button"
    >
        <Icon className="me-2" />
        {label}
    </div>
);

const Home = ({ isAuth }) => {
    const navigate = useNavigate();

    // Function to handle redirection if authenticated
    const handleRedirect = (path) => {
        if (isAuth) {
            navigate(path);
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Access Denied',
                text: 'Please log in to access this page.',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div style={styles.container}>
            <h3>Welcome to the Home Page</h3>
            <p>Select a page to visit. If you’re not logged in, you'll need to log in to access certain pages.</p>

            {/* Navigation Buttons */}
            <NavButton
                path="/dashboard"
                label="Dashboard"
                icon={FaTachometerAlt}
                isAuth={isAuth}
                onRedirect={handleRedirect}
                style={styles.dashboardButton}
            />
            <NavButton
                path="/users"
                label="Users Page"
                icon={FaUsers}
                isAuth={isAuth}
                onRedirect={handleRedirect}
                style={styles.usersButton}
            />

            {/* Alert for unauthenticated users */}
            {!isAuth && (
                <Alert variant="warning" style={styles.alert}>
                    <strong>Note:</strong> You need to log in to access certain pages.
                </Alert>
            )}
        </div>
    );
};

export default Home;
