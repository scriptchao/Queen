<style lang="stylus" rel="stylesheet/stylus">

</style>
<template>
    <div>
        <my-header></my-header>
        <my-center></my-center>
        <my-nav></my-nav>
        <router-view></router-view><!--//自动注册好-->
        <my-footer></my-footer>
    </div>
</template>
<script>
    import MyHeader from "./components/Header";
    import MyNav from "./components/Nav";
    import MyFooter from "./components/Footer";
    import myCenter from './components/Center';
    export default {
        components : {
            MyHeader,
            MyNav,
            MyFooter,
            myCenter
        }
    };
</script>
