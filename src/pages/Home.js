import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FaUsers, FaTachometerAlt } from "react-icons/fa";

const Home = ({ isAuth }) => {
    const navigate = useNavigate();

    // Function to handle redirection if authenticated
    const handleRedirect = (path) => {
        if (isAuth) {
            navigate(path);
        } else {
            alert("Please log in to access this page.");
        }
    };

    return (
        <div style={{ padding: "10px" }}>
            <h3>Welcome to the Home Page</h3>
            <p>Please choose a page to visit. If you're not logged in, you'll be asked to log in.</p>

            <div>
                <a
                    href="/dashboard"
                    onClick={(e) => {
                        e.preventDefault();
                        handleRedirect("/dashboard");
                    }}
                    style={{ display: "inline", marginBottom: "10px", marginRight:"5px", padding: "10px", textAlign: "center", backgroundColor: "#007bff", color: "white", textDecoration: "none" }}
                >
                    <FaTachometerAlt className="me-2" />
                    Dashboard
                </a>

                <a
                    href="/users"
                    onClick={(e) => {
                        e.preventDefault();
                        handleRedirect("/users");
                    }}
                    style={{ display: "inline", padding: "10px", textAlign: "center", backgroundColor: "#28a745", color: "white", textDecoration: "none" }}
                >
                    <FaUsers className="me-2" />
                    Users Page
                </a>
            </div>

            {!isAuth && (
                <Alert variant="warning" style={{ marginTop: "20px" }}>
                    <strong>Note:</strong> You need to log in to access certain pages.
                </Alert>
            )}
        </div>
    );
};

export default Home;
