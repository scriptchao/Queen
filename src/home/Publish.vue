<style scoped lang="stylus" rel="stylesheet/stylus">
    .publish-img
        div
            margin-top 30px
            width 100%
            height 340px
            overflow hidden
            >span
                color white
                margin 20px
                float left
                font-size 24px
            .box
                width 400px
                height 300px
                background white
                float right
                margin 20px
                >p
                    background rgb(106,106,106)
                    width 100%
                    text-align center
                    font-size 13px
                    line-height 30px
                    color white
                >a
                    width 180px
                    height 180px
                    display inline-block
                    background-size 100% 100%
                    margin 40px 0 0 20px
                .boxInner
                    width 160px
                    float right
                    height 100%
                    p
                        &:first-of-type
                            span
                                &:first-child
                                    font-size 14px
                                    font-weight bold
                                    margin-right 10px
                                &:last-child
                                    font-size 22px
                        &:nth-of-type(2)
                            width 128px
                            font-size 14px
                            margin 30px 0
                        &:nth-of-type(3)
                            font-size 13px
                            margin-top 20px
                        &:nth-of-type(4)
                            font-size 13px
                            margin-top 10px
                    a
                        color white
                        padding 6px 22px
                        background rgb(80,80,80)
                        font-size 13px
                        float right
    body
        width 100%
</style>
<template>
    <div class="publish">
        <p>首发品牌</p>
        <span @click="handleClick">+</span>
        <div class="clearFix"></div>
        <div class="publish-img">
            <div v-for="item in arrPublish" :style="{'background-image' : 'url(' + item.src + ')'}">
                <span>LOGO</span>
                <div class="box">
                    <p v-text="item.box.title"></p>
                    <a :href="item.box.href" :style="{'background-image' : 'url(' + item.box.src + ')'}"></a>
                    <div class="boxInner">
                        <p><span>代言人:</span><span v-text="item.box.name"></span></p>
                        <p>拒绝平庸，追求卓越凸显个性，绝不将就</p>
                        <img src="../assets/icon3.png" alt="">
                        <img src="../assets/icon4.png" alt="">
                        <router-link :to="href">立即购买</router-link>
                        <p>{{item.box.like}}人喜欢</p>
                        <p>{{item.box.buy}}人已经购买</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="publish-img" v-for="num in count">
            <div v-for="item in arrPublish" :style="{'background-image' : 'url(' + item.src + ')'}">
                <span>LOGO</span>
                <div class="box">
                    <p v-text="item.box.title"></p>
                    <a :href="item.box.href" :style="{'background-image' : 'url(' + item.box.src + ')'}"></a>
                    <div class="boxInner">
                        <p><span>代言人:</span><span v-text="item.box.name"></span></p>
                        <p>拒绝平庸，追求卓越凸显个性，绝不将就</p>
                        <img src="../assets/icon3.png" alt="">
                        <img src="../assets/icon4.png" alt="">
                        <a href="https://www.baidu.com">立即购买</a>
                        <p>{{item.box.like}}人喜欢</p>
                        <p>{{item.box.buy}}人已经购买</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                href : '/publish',
                count : 0,
                arrPublish : [
                    {
                        src : require('../assets/5zcX5nGL-0.jpg'),
                        box :{
                            title : '距首发结束:20天18时18分18秒',
                            src : require('../assets/5zcX5nGL-1.png'),
                            href : 'http://www.baidu.com',
                            name : 'Queen',
                            like : '5555',
                            buy : '10000'
                        }
                    },
                    {
                        src : require('../assets/5zcX5nGL-2.jpg'),
                        box :{
                            title : '距首发结束:20天18时18分18秒',
                            src : require('../assets/5zcX5nGL-3.png'),
                            href : 'http://www.baidu.com',
                            name : 'Queen',
                            like : '5555',
                            buy : '10000'
                        }
                    },
                    {
                        src : require('../assets/5zcX5nGL-4.jpg'),
                        box :{
                            title : '距首发结束:20天18时18分18秒',
                            src : require('../assets/5zcX5nGL-5.png'),
                            href : 'http://www.baidu.com',
                            name : 'Queen',
                            like : '5555',
                            buy : '10000'
                        }
                    },

                ]
            }
        },
        methods:{
            handleClick(){
                this.count++
            }
        }
    }
</script>
