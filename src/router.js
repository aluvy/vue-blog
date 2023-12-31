// import { createWebHistory, createRouter } from "vue-router";

import { createRouter, createWebHashHistory } from 'vue-router'

// vue-router 라이브러리의 함수들을 import 한다.
// createRouter : 라우터생성을 도와주는 함수

import compHome from './components/compHome.vue';
import compList from './components/compList.vue';
import compDetail from './components/compDetail.vue';
import compAuthor from './components/compAuthor.vue';
import compComment from './components/compComment.vue';
import comp404 from './components/comp404.vue';

const routes = [
    {
        path: "/",
        component: compHome,
    },
    {
        path: "/list",                  // 접속 경로
        component: compList,            // 보여줄 컴포넌트
    },
    {
        path: "/detail/:id",
        component: compDetail,
        children: [
            {
                path: "author",
                component: compAuthor
            },
            {
                path: "comment",
                component: compComment
            },
        ]
    },
    {
        path: "/:anything(.*)",        // 404페이지
        component: comp404,
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;