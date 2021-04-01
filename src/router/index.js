import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import Series from '../views/Series.vue';
import Profile from '../views/Profile.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/series',
    name: 'Series',
    component: Series,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
