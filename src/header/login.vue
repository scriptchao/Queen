<style scoped lang="stylus" rel="stylesheet/stylus">
    .login
        margin-top 30px
        .login_footer
            border-bottom 1px solid rgb(187,187,187)
            padding-bottom 30px
            p
                font-size 48px
                font-weight bold
        .login_nav
            overflow hidden
            span
                line-height 80px
                &:first-child
                    font-size 32px
                    font-weight bold
                    float left
                &:last-child
                    font-size 13px
                    float right
        .login_main
            height 420px
            border 1px solid rgb(120,120,120)
            margin-top 20px
            padding 70px
            .login_main_left
                font-size 14px
                width 250px
                float left
                input
                    &:not(.code)
                        width 250px
                        height 25px
                        margin-bottom 30px
                    &.code
                        height 25px
                >span
                    width 70px
                    height 25px
                    background rgb(200,200,200)
                    text-align center
                    display inline-block
                    line-height 25px
                    position relative
                    left  20px
                .login_code
                    margin-top 10px
                    a
                        &:first-child
                            float left
                        &:last-child
                            float right
                &>a
                    font-size 18px
                    color white
                    width 250px
                    height 35px
                    border-radius 5px
                    display inline-block
                    background rgb(200,200,200)
                    line-height @height
                    text-align center
                    margin-top 30px
                .login_bottom
                    margin-top 30px
                    span
                        float left
                        line-height 1.3
                    a
                        background-image url(../assets/partner.jpg)
                        display inline-block
                        background-size auto 100%
                        width 20px
                        height @width
                        float left
                        margin-left 6px
                        &:nth-of-type(1)
                            background-position-x 0
                        &:nth-of-type(2)
                            background-position-x -22px
                        &:nth-of-type(3)
                            background-position-x -41px
                        &:nth-of-type(4)
                            background-position-x -62px
            .login_main_right
                float right
                p
                    width 320px
                    font-size 15px
                    line-height 1.6
                    margin-top 20px
                a
                    font-size 18px
                    color white
                    width 250px
                    height 35px
                    border-radius 5px
                    display inline-block
                    background rgb(106,106,106)
                    line-height @height
                    text-align center
                    margin-top 30px







    body
        width 100%
</style>
<template>
    <div class="w1000 login">
        <div class="login_footer">
            <p>LOGO</p>
        </div>
        <div class="login_nav">
            <span>登录</span>
            <span>女王帮助</span>
        </div>
        <div class="login_main">
            <div class="login_main_left">
                <input type="text" placeholder="用户名">
                <input type="password" placeholder="密码">
                <input type="text" @focus="handleFocus" class="code" placeholder="验证码">
                <span v-text="code"></span>
                <div class="login_code">
                    <a href="">忘记密码</a>
                    <a href="">修改密码</a>
                </div>
                <router-link :to="href1">登入</router-link>
                <div class="login_bottom">
                    <span>使用合作网站账号登入:</span>
                    <a href="https://www.baidu.com"></a>
                    <a href="https://www.baidu.com"></a>
                    <a href="https://www.baidu.com"></a>
                    <a href="https://www.baidu.com"></a>
                </div>
            </div>
            <div class="login_main_right">
                <h2>欢迎来到女王珠宝!</h2>
                <p>Registering for a free account gives you a number of additional benefits, including access to additional valuable information that you can browse or download, and much more.</p>
                <router-link :to="href2">注册</router-link>
            </div>


        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                href1: '/',
                href2: '/sign',
                code : Math.floor(Math.random()*10) + ''
                + Math.floor(Math.random()*10) + ''
                + Math.floor(Math.random()*10) + ''
                + Math.floor(Math.random()*10)
            }
        },
        methods:{
            handleFocus(){
                this.code = Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10)
            }
        }
    }
</script>
