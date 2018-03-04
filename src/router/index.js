import Vue from 'vue';
import Router from 'vue-router';
import Listings from '@/components/Listings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listings',
      component: Listings,
    },
  ],
});
