import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react"; // Added import for Auth0Provider
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
// import { Auth0Provider } from '@auth0/auth0-react'; 
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import ProfilePage from './components/pages/Landing/ProfilePage'; 

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });
console.log('Auth0 Domain:', process.env.REACT_APP_AUTH0_DOMAIN); // Log Auth0 Domain
console.log('Auth0 Client ID:', process.env.REACT_APP_AUTH0_CLIENT_ID); // Log Auth0 Client ID
ReactDOM.render( // Render the App component wrapped in Auth0ProviderWithHistory
  <Provider store={store}>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// The Auth0Provider enables the use of authentication features throughout the app.

export function App() {
  const { Footer, Header } = Layout;
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}
