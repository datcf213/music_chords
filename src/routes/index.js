import Home from '~/pages/Home';
import Login from '~/pages/Login';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

export const privateRoutes = [];
