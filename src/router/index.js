/**
 * Copyright (C), 2012-2018, Sichuan Xiaoka Technology Co., Ltd.
 * */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { // 重定向
      path: '*',
      redirect: '/'
    }
  ]
});
