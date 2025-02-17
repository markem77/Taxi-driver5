import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import Layout from './routes/layout';
import NotMatch from './routes/not-match';
import Driver from './routes/Driver';
import Rider from './routes/Rider';
import Ville from './routes/Ville';
import HomePage from './routes/home';
import Pub from './routes/Pub';
import Mortgage from './routes/mortgage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotMatch />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'driver',
        element: <Driver />,
      },
      {
        path: 'rider',
        element: <Rider />,
      },
      {
        path: 'ville',
        element: <Ville />,
      },
      {
        path: 'pub',
        element: <Pub />,
      },
      {
        path: 'mortgage',
        element: <Mortgage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
