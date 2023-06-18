import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from './context/productcontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
    <Auth0Provider
    domain="dev-y1v31oenzy0ezg4d.us.auth0.com"
    clientId="gPLVK3ER8XxdRvCi9VLVp6c1xmbskQY0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

 
     <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>
</>
);

