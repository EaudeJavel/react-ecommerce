import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;
