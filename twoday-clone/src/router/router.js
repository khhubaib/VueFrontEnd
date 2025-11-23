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
import ShowMeta from '../Admin/ShowMeta.vue';
import Login from '../Admin/Login.vue';
import Welcome from '../Admin/Welcome.vue';
import TagStatus from '../Admin/TagStatus.vue';

const routes = [
  // PUBLIC PAGES
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/services', name: 'ServicesPage', component: ServicesPage },
  { path: '/career', name: 'CareerPage', component: CareerPage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },

  // AUTH PAGES
  { path: '/login', name: 'Login', component: Login },

  // ADMIN PROTECTED ROUTES
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
    meta: { requiresAuth: true }
  },

  {
    path: '/page/:id/tags',
    name: 'MetaTag',
    component: MetaTags,
    meta: { requiresAuth: true }
  },

  
  {
    path: '/tagstatus',
    name: 'TagStatus',
    component: TagStatus,
    meta: { requiresAuth: true }
  },

  {
    path: '/updatetag/:id',
    name: 'UpdateMTag',
    component: UpdateMTag,
    meta: { requiresAuth: true }
  },

  {
    path: '/addtag',
    name: 'AddMTag',
    component: AddMTag,
    meta: { requiresAuth: true }
  },

  {
    path: '/admin/meta-tags',
    name: 'ShowMeta',
    component: ShowMeta,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

/* ------------------------------------------------------------------
   🔥 GLOBAL AUTH GUARD
---------------------------------------------------------------------*/
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('admin_token');

    // if admin page requires login but token missing
    if (to.meta.requiresAuth && !token) {
        return next('/login');
    }

    // if user is already logged in, stop them from going back to login
    if (to.path === '/login' && token) {
        return next('/welcome');
    }

    next();
});

export default router;
