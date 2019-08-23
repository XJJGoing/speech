import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index';
import Progress from '@/components/Progress';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/progress',
      name:"progress",
      component:Progress
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
