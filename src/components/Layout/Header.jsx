import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Get authentication status and functions

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
        {isAuthenticated ? ( // Conditionally render Profile link
          <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
            Profile
          </Link>
        ) : ( 
          <button onClick={loginWithRedirect} style={{ color: '#E2F0F7', paddingRight: '75px' }}>
            Login
          </button>
        )}
        {isAuthenticated && ( // Conditionally render Logout button
          <button onClick={() => logout({ returnTo: window.location.origin })} style={{ color: '#E2F0F7' }}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
