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

            span
                font-size 20px
                padding 7px 12px 5px 12px
                border 1px solid rgb(228,228,228)
                vertical-align middle
                margin-left -5px
                cursor pointer
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






body
    width 100%
</style>
<template>
    <div class="center w1180">
        <div class="left">
            <span class="logo">LOGO</span>
            <span class="city">广东▼</span>
            <div class="fixedBox none">
                <div class="cityAll">
                    <ul v-for="list of arr">
                        <li>{{list.word}}</li>
                        <li v-for="list of list.city">
                            <a :href="list.href">{{list.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cen">
            <div class="ipt">
                <input type="text">
                <span>☂</span>
            </div>
            <div class="text">
                <span>QueenJewelry</span>
                <span>钻戒</span>
                <span>铂金对戒</span>
            </div>
            <div class="shop">
                我的首饰盒▼
                <div class="shopBox">
                    <div class="case1">
                        <span class="new">最新加入的商品</span>
                        <span class="empty">清空首饰盒</span>
                    </div>
                    <div class="case2">

                    </div>

                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
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
                                name : '黑龙江',
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
                                name : '内蒙古',
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
                    src : '',
                    name : 'Life·After LifeQueenJewelry',
                    money : '',
                    times : ''
                }


            }
        }
    }
</script>
