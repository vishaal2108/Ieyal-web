import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { ContactPage } from '@/pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'industries', element: <IndustriesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
]);
