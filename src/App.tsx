import React from 'react';

import './App.css';
import TweetPage from './components/pages/TweetPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <TweetPage />
  ) : (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
}

export default App;
