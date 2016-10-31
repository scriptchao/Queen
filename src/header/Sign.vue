<style scoped lang="stylus" rel="stylesheet/stylus">
    .sign
        margin-top 30px
        .sign_footer
            border-bottom 1px solid rgb(187,187,187)
            padding-bottom 30px
            p
                font-size 48px
                font-weight bold
        .sign_nav
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
        .sign_main
            overflow hidden
            >a
                display inline-block
                background-image url(../assets/u63.jpg)
                background-size 100% 100%
                width 580px
                height 420px
                float left
                margin-top 40px
            .sign_right
                width 400px
                height 460px
                border 1px solid rgb(214,214,214)
                float right
                font-size 14px

                .sign_right_tel
                    width 199px
                    height 40px
                    border-right  1px solid rgb(214,214,214)
                    float left
                    line-height 40px
                    text-align center
                    cursor pointer
                .sign_right_eml
                    width 199px
                    height 40px
                    border-left  1px solid rgb(214,214,214)
                    float right
                    line-height 40px
                    text-align center
                    cursor pointer
                .sign_tel
                    padding 100px 0 0 0
                    div
                        margin-bottom 20px
                        width 310px
                        .txt
                            width 60px
                            text-align right
                            display inline-block
                        .wth1
                            width 90px
                        .queryCode
                            font-size 13px


    .index
        border-bottom  1px solid rgb(214,214,214)






    body
        width 100%
</style>
<template>
    <div class="w1000 sign">
        <div class="sign_footer">
            <p>LOGO</p>
        </div>
        <div class="sign_nav">
            <span>注册</span>
            <span>女王帮助</span>
        </div>
        <div class="sign_main">
            <a></a>
            <div class="sign_right">
                <p class="sign_right_tel" :class="{index : !box}" @click="handleClick1">手机号码注册</p>
                <p class="sign_right_eml" :class="{index : box}" @click="handleClick2">电子邮箱注册</p>
                <div class="sign_tel">
                    <div>
                        <span class="txt">手机号码</span>
                        <select class="wth1">
                            <option value="">中国(+86)</option>
                            <option value="">美国(+00)</option>
                        </select>
                        <input type="text" placeholder="输入手机号码">
                    </div>
                    <div>
                        <span class="txt">验证码</span>
                        <input type="text" class="wth1">
                        <a class="queryCode">获取短信验证码</a>
                    </div>
                    <div>
                        <span class="txt">密码</span>
                        <input type="password" placeholder="6-32个字符">
                    </div>
                    <div>
                        <span class="txt">确认密码</span>
                        <input type="password" placeholder="请重复输入您的密码">
                    </div>
                    <div>
                        <input type="radio">
                        <span>同意《女王珠宝账号服务条款，隐私政策》</span>
                    </div>
                    <div>
                        <router-link :to="href">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                box : 1
            }
        },
        methods:{
            handleClick1(){
                this.box = 1
            },
            handleClick2(){
                this.box = 0
            }
        }

    }
</script>
