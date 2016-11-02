<style scoped lang="stylus" rel="stylesheet/stylus">
.center
    height 110px
    position relative
    .left
        float left
        .logo
            font-size 30px
            font-weight 700
            line-height 110px
        .city
            line-height 110px
            font-size 14px
            margin-left 5px
            cursor pointer
            &:hover
               &+.fixedBox
                    display block
        .fixedBox
            width 440px
            height 130px
            background white
            position absolute
            left 99px
            top 70px
            border 1px solid rgb(200,200,200)
            padding 10px
            z-index 20
            &:hover
                display block
            .cityAll
                ul
                    overflow hidden
                    li
                        float left
                        margin-left 12px
                        font-size 14px
                        line-height 2
                        a
                            cursor pointer
                            &:hover
                                color rgb(255,74,0)
    .cen
        position relative
        .ipt
            float left
            margin-left 160px
            margin-top 35px
            input
                width 500px
                height 40px
                border 1px solid rgb(228,228,228)
                outline none
                padding 0 20px
                float left
            span
                font-size 14px
                height 40px
                width 60px
                line-height @height
                text-align center
                border 1px solid rgb(228,228,228)
                float left
                margin-left -1px
                cursor pointer
                display inline-block
                &:hover
                    color rgb(255,74,1)
        .text
            position absolute
            left 590px
            top 47px
            span
                font-size 12px
                color rgb(102,102,102)
                background rgb(243,243,243)
                margin-left 5px
                cursor pointer
                padding 1px 0
                &:hover
                    background rgb(223,223,223)
        .shop
            position relative
            font-size 14px
            color rgb(102,102,102)
            height 40px
            width 130px
            border 1px solid rgb(228,228,228)
            float left
            line-height @height
            text-align center
            margin-left 50px
            margin-top 35px
            cursor pointer
            z-index 10
            &:hover
                .shopBox
                    display block
            .shopBox
                padding 0 20px
                width 320px
                height 170px
                border 1px solid rgb(188,188,188)
                position absolute
                left 50%
                bottom -@height
                margin-left -(@width/2)
                background white
                display none
                .case1
                    height 34px
                    width 100%
                    background rgb(242,242,242)
                    box-sizing content-box
                    padding 0 20px
                    margin-left -20px
                    .new
                        line-height 34px
                        float left
                    .empty
                        line-height 34px
                        float right
                .case2
                    float left
                    width 100%
                    border-bottom 1px solid black
                    padding-bottom 10px
                    &.line
                        line-height 3
                        margin-top 18px
                    img
                        margin-top 10px
                        float left
                    >span
                        width 110px
                        display inline-block
                        margin-top 20px
                        float left
                        margin-left 15px
                    div
                        float right
                        margin-top 20px
                        .del
                            text-align right
                .case3
                    margin-top 10px
                    float left
                    width 100%
                    div
                        float left
                        p
                            line-height 1.3
                            text-align left
                    a
                        float right
                        padding 5px 10px
                        background rgb(241,241,241)
                        margin-top 4px
    .right
        float right
        text-align center
        margin-top 10px
        font-size 14px
        line-height 1.5
        &:before
            content ''
            background-image url(../assets/chat.jpg)
            width 68px
            height @width
            display block

body
    width 100%
</style>
<template>
    <div class="center w1180">
        <div class="left">
            <span ref='logo' class="logo">LOGO</span>
            <span class="city">{{txt}}▼</span>
            <div class="fixedBox none">
                <div class="cityAll">
                    <ul v-for="list of arr">
                        <li>{{list.word}}</li>
                        <li v-for="list of list.city">
                            <a  @click="handleClick1(list.name)">{{list.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div ref='div' class="cen">
            <div class="ipt">
                <input type="text" placeholder="搜索你需要的关键词">
                <span>搜索</span>
            </div>
            <div class="text">
                <span>QueenJewelry</span>
                <span>钻戒</span>
                <span>铂金对戒</span>
            </div>
            <div class="shop">我的首饰盒▼
                <div class="shopBox">
                    <div class="case1">
                        <span class="new">最新加入的商品</span>
                        <span class="empty" @click="handleClick">清空首饰盒</span>
                    </div>
                    <div class="case2" v-if="current">
                        <img :src="shop.src">
                        <span>{{shop.name}}</span>
                        <div>
                            <p>￥{{shop.money}} × {{shop.times}}</p>
                            <p class="del" @click="handleClick">删除</p>
                        </div>
                    </div>
                    <div class="case2 line" v-else>尊敬的女王,您的首饰盒空空如也哦</div>
                    <div class="case3">
                        <div v-if="current">
                            <p>共{{shop.times}}件商品</p>
                            <p>共计:￥{{shop.money*shop.times}}.00</p>
                        </div>
                        <a :href="shop.href">查看首饰盒</a>
                    </div>

                </div>
            </div>
        </div>
        <div class="right">
            关注微信
        </div>
    </div>
</template>
<script>

    export default{
        mounted(){
            /*console.log(this.$parent.$children[0]);*/
            /*console.log(this.$refs)*/
        },
        methods : {
            handleClick(){
                /*console.log(this);*/
               this.current = 0;

            },
            handleClick1(option){
                this.txt = option
            }
        },
        data(){
            return {
                current : 1,
                txt : '北京',
                arr : [
                    {
                        word : 'A-G',
                        city : [
                            {
                                name : '北京',
                                href : '/'
                            },
                            {
                                name : '安徽',
                                href : '/'
                            },
                            {
                                name : '重庆',
                                href : '/'
                            },
                            {
                                name : '福建',
                                href : '/'
                            },
                            {
                                name : '广东',
                                href : '/'
                            },
                            {
                                name : '广西',
                                href : '/'
                            },
                            {
                                name : '甘肃',
                                href : '/'
                            },
                            {
                                name : '贵州',
                                href : '/'
                            },

                        ]
                    },
                    {
                        word : 'H-J',
                        city : [
                            {
                                name : '河北',
                                href : '/'
                            },
                            {
                                name : '河南',
                                href : '/'
                            },
                            {
                                name : '海南',
                                href : '/'
                            },
                            {
                                name : '湖北',
                                href : '/'
                            },
                            {
                                name : '湖南',
                                href : '/'
                            },
                            {
                                name : '吉林',
                                href : '/'
                            },
                            {
                                name : '江苏',
                                href : '/'
                            },
                            {
                                name : '江西',
                                href : '/'
                            }
                        ]
                    },
                    {
                        word : 'L-S',
                        city : [
                            {
                                name : '辽宁',
                                href : '/'
                            },
                            {
                                name : '宁夏',
                                href : '/'
                            },
                            {
                                name : '青海',
                                href : '/'
                            },
                            {
                                name : '上海',
                                href : '/'
                            },
                            {
                                name : '四川',
                                href : '/'
                            },
                            {
                                name : '山东',
                                href : '/'
                            },
                            {
                                name : '山西',
                                href : '/'
                            },
                            {
                                name : '陕西',
                                href : '/'
                            }
                        ]
                    },
                    {
                        word : 'T-Z',
                        city : [
                            {
                                name : '天津',
                                href : '/'
                            },
                            {
                                name : '新疆',
                                href : '/'
                            },
                            {
                                name : '西藏',
                                href : '/'
                            },
                            {
                                name : '云南',
                                href : '/'
                            },
                            {
                                name : '浙江',
                                href : '/'
                            }
                        ]
                    }
                ],
                shop : {
                    src : require('../assets/shop.png'),
                    name : 'Life·After Life QueenJewelry',
                    money : '139.00',
                    times : '4',
                    href : 'https://www.baidu.com'
                }
            }
        }
    }
</script>
