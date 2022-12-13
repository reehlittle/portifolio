import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, Privacy } from '@app/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cookieClicker/term',
    element: <Privacy />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
