import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootPage from './root-page/RootPage';
import ListingPage from './listing-page/ListingPage';
import ErrorPage from './error-page/ErrorPage';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'listings/:hash',
          element: <ListingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
