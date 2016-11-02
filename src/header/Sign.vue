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
                .sign_eml
                    padding 100px 44px 0 20px
                    div
                        margin-bottom 20px
                        position relative
                        .txt
                            width 60px
                            text-align right
                            display inline-block
                        .wth1
                            width 90px
                            margin-right 10px
                            margin-left 10px
                            height 24px

                        .queryCode
                            font-size 12px
                            width 135px
                            height 24px
                            background rgb(214,214,214)
                            display inline-block
                            line-height @height
                            text-align center
                            cursor pointer
                        .wth2
                            margin-left 10px
                            width 240px
                            height 24px
                        .wth3
                            margin-left 10px
                        .wth4
                            width 135px
                            height 24px
                        .wth5
                            width 160px
                            height 24px
                            margin-left 10px
                        .code
                            width 70px
                            height 24px
                            background rgb(200,200,200)
                            text-align center
                            line-height 24px
                            float right
                            margin-right 8px
                    .lastDiv
                        a
                            background rgb(187,187,187)
                            width 240px
                            height 35px
                            display inline-block
                            line-height 35px
                            text-align center
                            font-size 16px
                            color white
                            border-radius 5px
                            margin-left 75px
                            cursor pointer
    .index
        border-bottom  1px solid rgb(214,214,214)
    .line
        position relative
        top -2px
    .test
        position absolute
        font-size 12px
        white-space nowrap
        line-height 23px
        right -37px
        z-index 10
        text-align center
    .testAll
        text-align center
        margin-top 10px
        font-size 12px
        margin-left 60px
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
                <div class="sign_tel" v-show="box">
                    <div>
                        <span class="txt">手机号码</span>
                        <select class="wth1">
                            <option value="">中国(+86)</option>
                            <option value="">美国(+00)</option>
                        </select>
                        <input type="text" placeholder="输入手机号码" class="wth4" v-model="tel" @blur="handleBlur1">
                        <span class="test red" v-text="error1"></span>

                    </div>
                    <div>
                        <span class="txt">验证码</span>
                        <input type="text" class="wth1" v-model="cod" @blur="handleBlur2">
                        <a class="queryCode" @click="queryCode" v-text="codeMax"></a>
                        <span class="test red" v-text="error2"></span>
                    </div>
                    <div>
                        <span class="txt">密码</span>
                        <input type="password" placeholder="6-32个字符" class="wth2" v-model="pwd1">
                    </div>
                    <div>
                        <span class="txt">确认密码</span>
                        <input type="password" placeholder="请重复输入您的密码" class="wth2" v-model="pwd2" @blur="handleBlur3">
                        <span class="test red" v-text="error3"></span>
                    </div>
                    <div>
                        <span class="txt"></span>
                        <input type="radio" class="wth3" v-model="rdo" value="666">
                        <span class="size12 line">同意《女王珠宝账号服务条款，隐私政策》</span>
                    </div>
                    <div class="lastDiv">
                        <a @click="handleClick3">注册</a>
                        <div class="testAll red" v-text="errorAll"></div>
                    </div>
                </div>
                <div class="sign_eml">
                    <div>
                        <span class="txt">邮箱</span>
                        <input type="text" placeholder="请输入邮箱号码" class="wth2">
                    </div>
                    <div>
                        <span class="txt">密码</span>
                        <input type="password" class="wth2" placeholder="6-32个字符">
                    </div>
                    <div>
                        <span class="txt">确认密码</span>
                        <input type="password" placeholder="请重复输入您的密码" class="wth2">
                    </div>
                    <div>
                        <span class="txt">验证码</span>
                        <input type="text" placeholder="不区分大小写" class="wth5" @focus="handleFocus">
                        <p v-text="code" class="code"></p>
                    </div>
                    <div>
                        <span class="txt"></span>
                        <input type="radio" class="wth3" >
                        <span class="size12 line">同意《女王珠宝账号服务条款，隐私政策》</span>
                    </div>
                    <div class="lastDiv">
                        <router-link :to="href">注册</router-link>
                    </div>
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
                box : 1,
                href : '/signIn',
                code : Math.floor(Math.random()*10) + ''
                + Math.floor(Math.random()*10) + ''
                + Math.floor(Math.random()*10) + ''
                + Math.floor(Math.random()*10),
                codeMax : '获取短信验证码',
                error1 : '',
                error2 : '',
                error3 : '',
                errorAll : '',
                tel : '',
                cod : '',
                pwd1 : '',
                pwd2 : '',
                rdo : ''
            }
        },
        methods:{
            handleClick1(){
                this.box = 1
            },
            handleClick2(){
                this.box = 0
            },
            handleClick3(){
                console.log(this.error1);
                if(!this.error1 && !this.error2 && !this.error3 && (this.rdo === '666') && (location.href = '/signIn')){
                    return
                }
                this.errorAll = '注册失败!'
            },
            handleFocus(){
                this.code = Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10)
            },
            queryCode(){
                this.codeMax = Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10) + ''
                    + Math.floor(Math.random()*10)
            },
            handleBlur1(){
                /^1[3578]\d{9}$/.test(this.tel) || (this.error1 = '格式错误!');
                /^1[3578]\d{9}$/.test(this.tel) && (this.error1 = '');
                console.log(this.rdo)

            },
            handleBlur2(){
                (this.cod === this.codeMax) || (this.error2 = '验证错误!');
                (this.cod === this.codeMax) && (this.error2 = '');
            },
            handleBlur3(){
                if(this.pwd2 === ''){
                    (this.error3 = '不能为空!');
                    return
                }
                if(/^.{1,5}$/.test(this.pwd2)){
                    this.error3 = '长度太短!';
                    return
                }
                (this.pwd1 === this.pwd2) || (this.error3 = '不一致!');
                (this.pwd1 === this.pwd2) && (this.error3 = '');
            }
        },
        mounted(){
            console.log(this.rdo)
        }

    }
</script>
