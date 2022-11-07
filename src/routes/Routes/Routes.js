import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Profile from '../../Others/Profile/Profile';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Services from '../../Pages/Home/Services/Services';
import Login from '../../Pages/Login/Login';
import MyReview from '../../Pages/MyReview/MyReview';
import Register from '../../Pages/Register/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/my-review',
        element: <MyReview></MyReview>,
      },
      {
        path: '/add-service',
        element: <AddService></AddService>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
