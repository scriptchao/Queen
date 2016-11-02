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
import Login from './header/Login';
import Sign from './header/Sign';
import App from "./App";
import SubApp from "./SubApp";
import SignIn from "./header/SignIn";
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
                component: SubApp,
                children:[
                    {
                        path:'/',/*子集根！！！*/
                        component: Publish
                    }
                ]
            },
            {
                path: '/street',
                component: SubApp,
                children:[
                    {
                        path:'/',
                        component: Street
                    }
                ]
            },
            {
                path: '/represent',
                component: SubApp,
                children:[
                    {
                        path:'/',
                        component: Represent
                    }
                ]
            },
            {
                path: '/applyStart',
                component: SubApp,
                children:[
                    {
                        path:'/',
                        component: ApplyStart
                    }
                ]
            },
            {
                path: '/applyPreview',
                component: SubApp,
                children:[
                    {
                        path:'/',
                        component: ApplyPreview
                    }
                ]
            },
            {
                path:'/applyPost',
                component:SubApp,
                children:[
                    {
                        path:'/',
                        component: ApplyPost
                    }
                ]
            },
            {
                path: '/activity',
                component: SubApp,
                children:[
                    {
                        path:'/',
                        component: Activity
                    }
                ]
            }
        ]
    }),
    render : h => h(App)
});
