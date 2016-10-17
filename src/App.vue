<style lang="stylus" rel="stylesheet/stylus">
*
    margin 0
    padding 0
    line-height 1
    font-family Microsoft Yahei
    color rgb(51, 51, 51)
    box-sizing border-box
a
    text-decoration none
    color inherit
ul
ol
    list-style none
em
i
    font-style normal
.w1180
    margin 0 auto
    width 1180px
.none
    display none
</style>
<template>
	<div id="app">
        <my-header></my-header>
        <my-center></my-center>
        <my-nav></my-nav>
        <router-view></router-view> <!--//自动注册好-->
        <my-footer></my-footer>
	</div>
</template>
<script>
	import MyHeader from "./components/Header";
	import MyNav from "./components/Nav";
	import MyFooter from "./components/Footer";
    import myCenter from './components/Center'
	export default {
        components : {
            MyHeader,
            MyNav,
            MyFooter,
            myCenter,
        }
	};
</script>
