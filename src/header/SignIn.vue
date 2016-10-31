<style scoped lang="stylus" rel="stylesheet/stylus">
    .signIn
        margin-top 30px
        .signIn_footer
            border-bottom 1px solid rgb(187,187,187)
            padding-bottom 30px
            p
                font-size 48px
                font-weight bold
        .center
            width 200px
            height 30px
            position absolute
            top 50%
            left 50%
            margin-left -(@width/2)
            margin-top -(@height/2)
            a
                &:hover
                    color rgb(255,74,1)





    body
        width 100%
</style>
<template>
    <div class="w1000 signIn">
        <div class="signIn_footer">
            <p>LOGO</p>
        </div>
        <div class="center">
            <span>恭喜你注册成功,请</span>
            <router-link :to="href">登录</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                href:'/login'
            }
        }

    }
</script>
