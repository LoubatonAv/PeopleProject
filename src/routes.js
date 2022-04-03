import { Home } from './pages/Home.jsx';
import { PersonDetails } from './pages/PersonDetails.jsx';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/person/:personId',
    component: PersonDetails,
  },
];
