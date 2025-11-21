import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import ServicesPage from '../components/ServicesPage.vue';
import CareerPage from '../components/CareerPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';
import AdminPage from '../Admin/AdminPage.vue';
import MetaTags from '../Admin/MetaTags.vue';
import UpdateMTag from '../Admin/UpdateMTag.vue';
import AddMTag from '../Admin/AddMTag.vue';

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
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },

  {
    path: '/page/:id/tags',
    name: 'MetaTag',
    component: MetaTags
  },
  

  {
    path: '/updatetag/:id',
    name: 'UpdateMTag',
    component: UpdateMTag
  },

  {
    path: '/addtag',
    name: 'AddMTag',
    component: AddMTag
  },


 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };

  }
});

export default router;
