<style scoped lang="stylus" rel="stylesheet/stylus">
    .represent
        margin-top 50px
        >p
            font-size 24px
            font-weight bold
            margin-bottom 40px
        .repeater
            >div
                width 580px
                height 200px
                float left
                background-repeat no-repeat
                margin-bottom 20px
                .inner
                    float right
                    width 200px
                    position relative
                    p
                        right 20px
                        &:first-of-type
                            font-size 22px
                            width 100%
                            text-align center
                            margin-top 20px
                        &:nth-of-type(2)
                            position absolute
                            top 110px
                            font-size 13px
                        &:nth-of-type(3)
                            position absolute
                            top 160px
                            font-size 13px
                    a
                        font-size 13px
                        color white
                        display block
                        width 100px
                        line-height 24px
                        text-align center
                        position absolute
                        right 20px
                        cursor pointer
                        &:nth-of-type(1)
                            top 80px
                            background rgb(80,80,80)
                            &:before
                                content ''
                                background-image url(../assets/icon3.png)
                                width 21px
                                height 21px
                                position absolute
                                left -40px
                                top 2px
                        &:nth-of-type(2)
                            top 130px
                            background rgb(120,120,120)
                            &:before
                                content ''
                                background-image url(../assets/icon4.png)
                                width 21px
                                height 21px
                                position absolute
                                left -40px
                                top 2px


    body
        width 100%
</style>
<template>
    <div class="represent w1180">
        <p>为我代言!</p>
        <div class="repeater">
            <div v-for="item in arrRep" :style="{'background-image' : 'url(' + item.img + ')'}">
                <div class="inner">
                    <p v-text="item.name"></p>
                    <a>我要代言</a>
                    <p >{{item.likes}}人喜欢</p>
                    <router-link :to="href">立即购买</router-link>
                    <p>{{item.buy}}人已经购买</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                href : '/applyStart',
                arrRep : [
                    {
                        img : require('../assets/represent/5gCf6hki-0.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-1.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-2.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-3.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-0.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-1.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-2.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-3.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-0.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-1.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-2.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    },
                    {
                        img : require('../assets/represent/5gCf6hki-3.jpg'),
                        name : 'QueenJewelry',
                        likes : '8888',
                        buy : '10000'
                    }

                ]
            }
        }
    }
</script>
