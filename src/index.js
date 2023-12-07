import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Error404 from './pages/Error404';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lodging/:id',
    element: <Lodging />,
  },
  {
    path: '/error',
    element: <Error404 />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
