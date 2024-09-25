import React from "react"; 
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook to manage authentication

function ProfilePage() {
    // user information and authentication functions from useAuth0
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {isAuthenticated ? ( // Check if the user is authenticated
                <div>
                    <h1>Welcome, {user.name}</h1> // Display the user name
                    <p>Email: {user.email}</p> // Display the user email
                    <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button> // Logout button
                </div>
            ) : (
                <button onClick={loginWithRedirect}>Login</button> // Login button for unauthenticated users
            )}
        </div>
    );
}

export default ProfilePage;
