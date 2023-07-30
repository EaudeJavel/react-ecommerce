import { ReactElement, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
// import { useAuth0 } from '@auth0/auth0-react';
// import Login from '@/components/Login';
// import Logout from '@/components/Logout';

const Home = lazy(() => import('@/features/home/Home'));
const Favorites = lazy(() => import('@/features/favorites/Favs'));
// const Products = lazy(() => import('@/features/products/Products'));
const Profile = lazy(() => import('@/features/profile/Profile'));

const AnimatedRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

// const Authentification = (): JSX.Element => {
//   const { isAuthenticated } = useAuth0();
//   return isAuthenticated ? <Logout /> : <Login />;
// };

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedRoutes />
          {/* <Authentification /> */}
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
