import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: require('@/components/WelcomeView')
    },
    {
      path: '/inspire',
      name: 'inspire',
      component: require('@/components/InspireView')
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/bigData',
      name: 'bigData',
      component: require('@/components/bigData/index.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: require('@/components/design/index')
    },
    {
      path: '/earth',
      name: 'earth',
      component: require('@/components/earth/index')
    },
    {
      path: '/eco',
      name: 'eco',
      component: require('@/components/eco/index')
    },
    {
      path: '/eval',
      name: 'eval',
      component: require('@/components/eval/index')
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: require('@/components/forecast/index')
    },
    {
      path: '/fracs',
      name: 'fracs',
      component: require('@/components/fracs/index')
    },
    {
      path: '/layer',
      name: 'layer',
      component: require('@/components/layer/index')
    },
    {
      path: '/optim',
      name: 'optim',
      component: require('@/components/optim/index')
    },
    {
      path: '/safety',
      name: 'safety',
      component: require('@/components/safety/index')
    }
  ]
})
