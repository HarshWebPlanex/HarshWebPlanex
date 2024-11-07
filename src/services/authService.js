// Check if user is authenticated
export const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true"; // Return true if the user is logged in
};

// Set the user as authenticated in localStorage
export const login = () => {
    localStorage.setItem("isAuthenticated", "true"); // Store authentication flag
};

// Remove the user authentication flag on logout
export const logout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove the authentication flag
};
