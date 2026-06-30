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
      // Detail page placeholders to be implemented later
      { path: 'services/:slug', element: <div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Service Detail (Coming Soon)</h1></div> },
      { path: 'products/:slug', element: <div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Product Detail (Coming Soon)</h1></div> },
      { path: 'industries/:slug', element: <div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Industry Detail (Coming Soon)</h1></div> },
      { path: '*', element: <div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold text-red-500">404 - Not Found</h1></div> },
    ],
  },
]);
