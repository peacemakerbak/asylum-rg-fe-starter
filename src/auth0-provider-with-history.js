import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Auth0Provider } from '@auth0/auth0-react';

// This component wraps the application with Auth0Provider to enable authentication
const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory(); // Get history object for navigation
  const domain = process.env.REACT_APP_AUTH0_DOMAIN; // Auth0 domain from environment variables
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; // Auth0 client ID from environment variables

  // Callback function to handle redirects after authentication
  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname); // Redirect to the intended page or default
  };

  return (
    <Auth0Provider
      domain={domain} // Pass domain to Auth0Provider
      clientId={clientId} // Pass client ID to Auth0Provider
      authorizationParams={{ redirect_uri: window.location.origin }} // Updated to use authorizationParams
      onRedirectCallback={onRedirectCallback} // Set the redirect callback function
    >
      {children} // Render child components within Auth0 context
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory; // Export the component for use in the application