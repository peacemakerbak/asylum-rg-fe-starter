import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../../login-button'; // Added LoginButton import
import LogoutButton from '../../logout-button'; // Added LogoutButton import

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0(); // Removed loginWithRedirect and logout
  console.log(isAuthenticated); // Added console log for isAuthenticated

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    > 
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        {isAuthenticated ? ( // Updated rendering logic
          <div>
            <Link to="/profile" style={{ color: '#E2F0F7' }}>
              Profile
            </Link>
            <LogoutButton /> // Replaced Logout button with LogoutButton component
          </div>
        ) : (
          <LoginButton /> // Replaced Login button with LoginButton component
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
