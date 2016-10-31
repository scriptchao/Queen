<style scoped lang="stylus" rel="stylesheet/stylus">
    img
        border none
        vertical-align middle
        width 100%
        height 100%
    .brandNew
        margin-top 50px
        overflow hidden
    .new-today
        width 880px
        float left
        position relative
        .new
            position absolute
            top 0
            left 0
            width 100px
            height 30px
            line-height 30px
            text-align center
            background-color #797979
            color white
            font-size 13px
            font-family Arial
        .list
            height 252px
            margin-bottom 20px
            box-shadow 3px 3px 2px rgba(0,0,0,.3)
            .image
                float left
                width 600px
            .infor-detail
                width 280px
                text-align center
                float left
                .name
                    margin-top 40px
                    font-size 48px
                    font-weight 700
                    line-height normal
                .keywords
                    margin-top 8px
                    span
                        margin-left 10px
                .line
                    width 200px
                    height 1px
                    background-color #d7d7d7
                    margin-top 14px
                    margin-left 40px
                .btn
                    width 250px
                    height 40px
                    background url("../assets/brandNew/12.png")
                    position absolute
                    right 0
                    margin-top 28px
                    line-height 40px
                    color white
                    font-size 18px
                    display inline-block
                .time
                    margin-top 80px
                    font-size 14px
    .recommend
        width 280px
        margin-left 20px
        float left
        .swear
            border:1px solid #f2f2f2
            padding 16px
        .commend
            padding 16px 0
            .side-tit
                padding-left 16px
        .sidebar
            border-top 4px solid #000
            margin-bottom 20px
            .side-tit
                font-size 14px
                margin-bottom 14px
            .box
                padding 20px 0 24px
                &:nth-of-type(2)
                    border-bottom 1px solid #d7d7d7
                .box-tit
                    font-size 18px
                    line-height 20px
                .box-content
                    font-size 14px
                    line-height 20px
            .information
                padding 24px 0 30px
                border-bottom 1px solid #d7d7d7
                .image
                    width 280px
                    height 280px
                    background-size 100% 100%
                    background-repeat no-repeat
                .describe
                    margin-top 20px
                    font-size 14px
                .detail
                    margin-top 18px
                    font-size 16px
                    .price
                        font-weight bold
                    .follow
                    .likes
                    .messages
                        font-size 16px
                        color #868686
                        position relative
                        &:before
                            content ""
                            width 18px
                            height 16px
                            display inline-block
                            position absolute
                            top 3px
                            left -20px
                    .follow
                        margin-left 48px
                        &:before
                            background url('../assets/icon3.png')
                            background-repeat no-repeat
                            background-size 100% 100%
                    .likes
                        margin-left 35px
                        &:before
                            background url('../assets/icon4.png') no-repeat
                            background-size 100% 100%
                    .messages
                        margin-left 35px
                        &:before
                            background url('../assets/icon5.png') no-repeat
                            background-size 100% 100%
                    .btn
                        width 260px
                        height 40px
                        line-height 40px
                        color white
                        background-color #868686
                        text-align center
                        font-size 12px
                        margin 12px auto 0




</style>
<template>
    <div class="brandNew w1180">
        <div class="new-today">
            <div class="new">今日首发</div>
            <div class="list" v-for="item of list">
                <div class="image"><a href="#"><img :src="item.imgUrl" alt=""></a></div>
                <div class="infor-detail">
                    <p class="name">{{item.name}}</p>
                    <p class="keywords"><span v-for="word of item.keywords" >{{word}}</span></p>
                    <p class="line"></p>
                    <router-link class="btn" :to="href">我要代言</router-link>
                    <p class="time">距首发结束 : {{item.overtime.day}}天{{item.overtime.hour}}时{{item.overtime.minute}}分{{item.overtime.second}}秒</p>
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="sidebar swear">
                <div class="side-tit">女王宣言</div>
                <div class="box">
                    <p class="box-tit">我是女王我做主</p>
                    <p class="box-content">我是女王我做主 , 我是女王我做主 , 我是女王我做主 , 我是女王我做主</p>
                </div>
                <div class="box">
                    <p class="box-tit">我的品牌我代言</p>
                    <p class="box-content">我的女王我做主 , 我的女王我做主 , 我的女王我做主 , 我的女王我做主</p>
                </div>

            </div>
            <div class="sidebar commend">
                <div class="side-tit">爆款推荐</div>
                <div class="information" v-for="item of infor" >
                    <div class="image" :style="{'background-image':'url('+item.src+')'}"></div>
                    <p class="describe">{{item.discribe}}</p>
                    <p class="detail">
                        <span class="price">￥{{item.price}}.00</span>
                        <a href="#" class="follow">{{item.follow}}</a>
                        <a href="#" class="likes">{{item.likes}}</a>
                        <a href="#" class="messages">{{item.messages}}</a>
                    </p>
                    <div class="btn">马上购买</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                href : '/represent',
                list:[
                    {
                        imgUrl:require("../assets/Brandnew/1.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/2.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/6.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/4.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/5.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/6.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/2.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/1.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/6.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/5.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    },
                    {
                        imgUrl:require("../assets/Brandnew/6.jpg"),
                        name:"logo",
                        keywords:["Queen Jewelry","新宠"],
                        overtime:{
                            day:12,
                            hour:12,
                            minute:12,
                            second:12
                        },
                    }
                ],
                infor:[
                    {
                        src:require("../assets/Brandnew/7.jpg"),
                        discribe:"某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
                        price:999.00,
                        follow:999,
                        likes:99,
                        messages:99
                    },
                    {
                        src:require("../assets/Brandnew/8.jpg"),
                        discribe:"某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
                        price:999.00,
                        follow:999,
                        likes:99,
                        messages:99
                    },
                    {
                        src:require("../assets/Brandnew/9.jpg"),
                        discribe:"某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
                        price:999.00,
                        follow:999,
                        likes:99,
                        messages:99
                    },
                    {
                        src:require("../assets/Brandnew/7.jpg"),
                        discribe:"某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
                        price:999.00,
                        follow:999,
                        likes:99,
                        messages:99
                    },
                    {
                        src:require("../assets/Brandnew/8.jpg"),
                        discribe:"某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
                        price:999.00,
                        follow:999,
                        likes:99,
                        messages:99
                    }
                ]
            }
        }
    }
</script>
