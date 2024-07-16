export const widgetRoutes = [
  {
    path: '/',
    name: 'widget',
    component: () => import(/* webpackChunkName: "widget" */ '../pages/WidgetPage.vue')
  }
]
