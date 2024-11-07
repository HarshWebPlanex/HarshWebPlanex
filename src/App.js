import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { isAuthenticated, login, logout } from "./services/authService";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false); // Auth state
  const [alertMessage, setAlertMessage] = useState(null);
  const navigate = useNavigate();

  // Check authentication status when the component mounts
  useEffect(() => {
    setIsAuth(isAuthenticated()); // Check if user is authenticated on page load
  }, []);

  // Handle login
  const handleLogin = (credentialsValid) => {
    if (credentialsValid) {
      login(); // Set user as authenticated
      setIsAuth(true);
      setAlertMessage(null);
      navigate("/"); // Redirect to home page after successful login
    } else {
      setAlertMessage("Invalid credentials. Please register.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout(); // Remove authentication flag
    setIsAuth(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "10px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #ddd" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              My App
            </a>
          </div>

          {isAuth ? (
            <div>
              <button
                onClick={handleLogout}
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
              <Link
                to="/dashboard"
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Dashboard
              </Link>
              <Link
                to="/users"
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#28a745",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Users
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#28a745",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </header>

      {alertMessage && <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{alertMessage}</p>}

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected routes */}
        <Route
          path="/users"
          element={
            <ProtectedRoute onUnauthenticated={() => setAlertMessage("Please log in to access this page.")}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute onUnauthenticated={() => setAlertMessage("Please log in to access this page.")}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
