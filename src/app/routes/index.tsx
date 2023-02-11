import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, History, Privacy } from '@app/pages';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/history', element: <History /> },
  { path: '/cookieClicker/term', element: <Privacy /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
