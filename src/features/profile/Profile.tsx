/**
 * This component displays the user's profile information if they are authenticated,
 * otherwise it displays a message indicating that the user is not logged in.
 * It uses the useAuth0 hook from the @auth0/auth0-react library to retrieve the user's information.
 * @returns A React functional component that displays the user's profile information or a message indicating that the user is not logged in.
 */
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

import Loading from '../../common/generic/Loading';

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && user ? (
    <div>
      <img
        src={user.picture}
        alt={user.name}
        className="rounded-circle img-fluid profile-picture mb-md-0 mb-3"
      />
      {/* name = email */}
      <h2>{user.name}</h2>
      <p className="lead text-muted">{user.email}</p>
    </div>
  ) : (
    <div>
      <p>You are not logged in.</p>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
