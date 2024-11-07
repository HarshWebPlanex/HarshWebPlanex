import React from "react";
import { Navigate } from "react-router-dom";

// Protected route component to check authentication
const ProtectedRoute = ({ children, onUnauthenticated }) => {
    // Check if the user is authenticated (this depends on your login mechanism)
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
        // If not authenticated, call the onUnauthenticated callback and redirect to login
        if (onUnauthenticated) onUnauthenticated();
        return <Navigate to="/login" />;
    }

    return children; 
};

export default ProtectedRoute;
