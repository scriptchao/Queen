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
                a
                    width 180px
                    height 180px
                    display inline-block
                    background-size 100% 100%
                    margin 40px 0 0 20px
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
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
        }
    }
</script>
