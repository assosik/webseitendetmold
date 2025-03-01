import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import App from './App';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { References } from './pages/References';
import { FAQ } from './pages/FAQ';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'references',
        element: <References />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'impressum',
        element: <Impressum />,
      },
      {
        path: 'datenschutz',
        element: <Datenschutz />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);