import Vue from "vue";
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Publish from './pages/Publish';
import Street from './pages/Street';
import Represent from './pages/Represent';
import ApplyStart from './pages/ApplyStart';
import ApplyPreview from './pages/ApplyPreview';
import Activity from './pages/Activity';
import App from "./App";
Vue.use(VueRouter);
new Vue({
    el : "#app",
    router: new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Home
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
                path: '/activity',
                component: Activity
            },

        ]
    }),
    render : h => h(App)
});
