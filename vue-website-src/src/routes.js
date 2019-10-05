import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import GalleryPage from './pages/GalleryPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/gallery',
        component: GalleryPage
    },
    {
        path: '/contact',
        component: ContactPage
    }
];

export default routes;