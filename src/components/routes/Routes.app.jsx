import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';
import ErrorPage from '../../ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: 'users',
                element: <Users />,
                loader: async () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            },
            {
                path: 'food-details/:id',
                element: <UserDetails />,
                loader: async ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            }
        ]
    }
]);
