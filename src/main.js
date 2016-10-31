import Vue from "vue";
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Publish from './pages/Publish';
import Street from './pages/Street';
import Represent from './pages/Represent';
import ApplyStart from './pages/ApplyStart';
import ApplyPreview from './pages/ApplyPreview';
import ApplyPost from './pages/ApplyPost';
import Activity from './pages/Activity';
import Login from './header/Login.vue';
import Sign from './header/Sign.vue';
import App from "./App";
import SubApp from "./SubApp.vue";
import SignIn from "./header/SignIn.vue";
Vue.use(VueRouter);
new Vue({
    el : "#app",
    router: new VueRouter({
        mode: 'history',
        routes: [
            {
                path:'/signIn',
                component: SignIn
            },
            {
                path: '/sign',
                component:Sign
            },
            {
                path: '/login',
                component:Login
            },
            {
                path: '/',
                component: SubApp,
                children:[
                    {
                        path:'/',
                        component: Home
                    }
                ]
            },
            {
                path: '/publish',
                component: Publish
            },
            {
                path: '/street',
                component: Street
            },
            {
                path: '/represent',
                component: Represent
            },
            {
                path: '/applyStart',
                component: ApplyStart
            },
            {
                path: '/applyPreview',
                component: ApplyPreview
            },
            {
                path:'/applyPost',
                component:ApplyPost
            },
            {
                path: '/activity',
                component: Activity
            }
        ]
    }),
    render : h => h(App)
});
