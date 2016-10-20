<style scoped lang="stylus" rel="stylesheet/stylus">
    .home
        .beauty
            .top
            .publish
                margin-top 60px
                >p
                    float left
                    font-size 24px
                    font-weight bold
                    line-height 2
                >span
                    float right
                    padding 10px 14px
                    font-size 28px
                    background rgb(241,241,241)
                    border-radius 50%
                    cursor pointer
    .girls
        div
            float left
            img
                display block
                padding-bottom 20px
                padding-top 20px
                padding-right 16px
            span
                &:first-of-type
                    margin-left 20px
                    float left
                &:last-child
                    position relative
                    float right
                    margin-right 20px
                    font-size 12px
                    line-height 16px
                    &:before
                        content '☆'
                        font-size 18px
                        position absolute
                        right 35px

    .publish-img
        div
            margin-top 30px
            width 100%
            height 340px
            overflow hidden
            >p
                color white
                margin 20px
                float left
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
                a
                    width 180px
                    height 180px
                    display inline-block
                    background-size 100% 100%

    body
        width 100%
</style>
<template>
    <div class="home ">
        <banner :data="arrBanner" ref="abc"></banner>
        <div class="beauty w1180">
            <div class="top">
                <p>女王人气TOP10</p>
                <span @click="handleClick">+</span>
                <div class="clearFix"></div>
                <div class="girls">
                    <div v-for="list in arrBeauty">
                        <img :src="list.src" :title="list.title">
                        <span>{{list.name}}</span>
                        <span v-text="list.like"></span>
                    </div>
                </div>
                <div class="girls" v-for="num in count">
                    <div v-for="list in arrBeauty">
                        <img :src="list.src" :title="list.title">
                        <span>{{list.name}}</span>
                        <span v-text="list.like"></span>
                    </div>
                </div>
            </div>
            <div class="clearFix"></div>
            <div class="publish">
                <p>首发品牌</p>
                <span @click="handleClick">+</span>
                <div class="clearFix"></div>
                <div class="publish-img">
                    <div v-for="item in arrPublish" :style="{'background-image' : 'url(' + item.src + ')'}">
                        <p>LOGO</p>
                        <div class="box">
                            <p v-text="item.box.title"></p>
                            <a :href="item.box.href" :style="{'background-image' : 'url(' + item.box.src + ')'}"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import Banner from '../components/Banner';
    export default{
        methods :{
            handleClick(){
                this.count++
            }
        },
        mounted(){
            console.log(this.$refs.key);
        },
        data(){
            return{
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

                ],
                arrBeauty : [
                    {
                        title : '女王1',
                        src : require('../assets/5ayl5nGL-0.png'),
                        name : 'QueenJewelry',
                        like : '998'
                    },
                    {
                        title : '女王2',
                        src : require('../assets/5ayl5nGL-1.png'),
                        name : 'QueenJewelry',
                        like : '333'
                    },
                    {
                        title : '女王3',
                        src : require('../assets/5ayl5nGL-2.png'),
                        name : 'QueenJewelry',
                        like : '543'
                    },
                    {
                        title : '女王4',
                        src : require('../assets/5ayl5nGL-3.png'),
                        name : 'QueenJewelry',
                        like : '632'
                    },
                    {
                        title : '女王5',
                        src : require('../assets/5ayl5nGL-4.png'),
                        name : 'QueenJewelry',
                        like : '842'
                    },
                    {
                        title : '女王6',
                        src : require('../assets/5ayl5nGL-5.png'),
                        name : 'QueenJewelry',
                        like : '953'
                    },
                    {
                        title : '女王7',
                        src : require('../assets/5ayl5nGL-6.png'),
                        name : 'QueenJewelry',
                        like : '122'
                    },
                    {
                        title : '女王8',
                        src : require('../assets/5ayl5nGL-7.png'),
                        name : 'QueenJewelry',
                        like : '888'
                    },
                    {
                        title : '女王9',
                        src : require('../assets/5ayl5nGL-8.png'),
                        name : 'QueenJewelry',
                        like : '345'
                    },
                    {
                        title : '女王10',
                        src : require('../assets/5ayl5nGL-9.png'),
                        name : 'QueenJewelry',
                        like : '236'
                    }
                ],
                arrBanner : [
                    {
                        name : '图片1',
                        src : require('../assets/u28_state0.jpg')
                    },
                    {
                        name : '图片2',
                        src : require('../assets/u28_state1.jpg')
                    },
                    {
                        name : '图片3',
                        src : require('../assets/u28_state2.jpg')
                    },
                    {
                        name : '图片4',
                        src : require('../assets/u28_state3.jpg')
                    }
                ]
            }
        },
        components : {
            Banner
        }
    }
</script>
