<style scoped lang="stylus" rel="stylesheet/stylus">
    .bannerwrap
        position relative
        margin-bottom 50px
        .banner-tit
            position absolute
            top 124px
            left 500px
            z-index 2
            p
                color white
                font-size 36px
                font-weight 700
                line-height 48px
        .banner
            height 350px
    .brandlist
        overflow hidden
        margin-bottom 20px
        .logo
            width 220px
            height 330px
            background-color #5e5e5e
            color white
            text-align center
            float left
            margin-top 60px
            .t1
                margin-top 108px
                font-size 48px
                font-weight 700
                color white
            .t2
                margin-top 36px
                font-size 24px
                font-weight 700
                color white

        .goods
            margin-left 10px
            float right
            .top
                height 40px
                border-bottom 2px solid #000
                position relative
                width 948px
                .more
                    position absolute
                    right 0
                    bottom 10px
                    font-size 14px
                    color #fff
                    height 25px
                    line-height 25px
                    text-align center
                    .more-a
                        width 80px
                        display inline-block
                        line-height 25px
                        background-color #797979
                        color white
                    .more-b
                        width 25px
                        display inline-block
                        line-height 25px
                        background-color #a1a1a1
                        color white

            .goods-list
                float left
                margin-left 20px
                border 1px solid #d7d7d7
                padding 10px 10px 17px 10px


                &:nth-of-type(2)
                    margin-left 0
                .image
                    width 200px
                    height 200px
                    img
                        width 100%
                        height 100%
                p
                    margin-top 14px
                .price
                    float right
                .info
                    float right
                    .follow,.likes,.messages
                        color #868686
                        margin-left 16px
                        font-size 14px
                        &:before
                            content ""
                            width 18px
                            height 16px
                            display inline-block
                            vertical-align middle
                            margin-right 4px
                            margin-top -2px
                    .follow:before
                        background url("../assets/icon3.png") no-repeat
                        background-size 100%

                    .likes:before
                        background url("../assets/icon4.png") no-repeat
                        background-size 100%

                    .messages:before
                        background url("../assets/icon5.png") no-repeat
                        background-size 100%




</style>
<template>
    <div class="brand">
        <div class="bannerwrap">
            <div class="banner"><img src="../assets/banner01.jpg" alt=""></div>
            <div class="banner-tit">
                <p>我是女王，我做主！</p>
                <p>我的品牌我代言！</p>
            </div>
        </div>
        <div class="w1180">
            <div class="brandlist" v-for="item of brandlist">
                <div class="logo fl">
                    <p class="t1">LOGO</p>
                    <p class="t2">女王珠宝</p>
                </div>
                <div class="goods fl">
                    <div class="top">
                        <a href="#" class="more"><span class="more-a">了解更多</span><span class="more-b">>></span></a>
                    </div>
                    <div class="goods-list fl" v-for="list of item.goodslist">
                        <div class="image"><img :src="list.src" alt=""></div>
                        <p><span class="name">{{list.name}}</span><span class="price">￥{{list.price}}</span></p>
                        <p class="info"><span class="follow">{{list.follow}}</span><span class="likes">{{list.likes}}</span><span class="messages">{{list.messages}}</span></p>
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
                brandlist:[
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    },
                    {
                        goodslist:[
                            {
                                src:require("../assets/fashion01.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion02.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion03.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            },
                            {
                                src:require("../assets/fashion04.jpg"),
                                name:"QueenJewelry",
                                price:99,
                                follow:999,
                                likes:99,
                                messages:99
                            }
                        ],

                    }
                ]
            }
        }
    }
</script>
