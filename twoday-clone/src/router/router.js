import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import ServicesPage from '../components/ServicesPage.vue';
import CareerPage from '../components/CareerPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/services',
    name: 'ServicesPage',
    component: ServicesPage
  },
  {
    path: '/career',
    name: 'CareerPage',
    component: CareerPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
