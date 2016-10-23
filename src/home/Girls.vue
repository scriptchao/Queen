<style scoped lang="stylus" rel="stylesheet/stylus">
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
    </style>
<template>
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
</template>
<script>
    export default{
        methods :{
            handleClick(){
                this.count++
            }
        },
        data(){
            return {
                count : 0,
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
                ]
            }
        }
    }
</script>
