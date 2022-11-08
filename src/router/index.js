import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import Industries from '../views/Industries.vue';
import Products from '../views/Products.vue';
import Services from '../views/Services.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/industries',
    name: 'Industries',
    component: Industries,
  },
  {
    path: '/components',
    name: 'Products',
    component: Products,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
