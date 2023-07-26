import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Header />
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
