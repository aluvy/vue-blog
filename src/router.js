import { createWebHistory, createRouter } from "vue-router";
// vue-router 라이브러리의 함수들을 import 한다.
// createRouter : 라우터생성을 도와주는 함수

import compHome from './components/compHome.vue';
import compList from './components/compList.vue';
import compDetail from './components/compDetail.vue';

const routes = [
    {
      path: "/",
      component: compHome ,
    },
    {
        path: "/list",                  // 접속 경로
        component: compList ,           // 보여줄 컴포넌트
    },
    {
        path: "/detail",                  // 접속 경로
        component: compDetail ,           // 보여줄 컴포넌트
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;