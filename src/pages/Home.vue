<style lang="stylus" rel="stylesheet/stylus">
    .publish
    .top
        overflow hidden
        margin-top 60px
        >p
            float left
            font-size 24px
            font-weight bold
            line-height 2
        >span
            float right
            padding 9px 14px 10px 14px
            font-size 28px
            background rgb(241,241,241)
            border-radius 50%
            cursor pointer
</style>
<template>
    <div class="home ">
        <banner :data="arrBanner" ref="abc"></banner>
        <div class="w1180">
            <girls></girls>
            <publish></publish>
        </div>
    </div>
</template>
<script>
    import Banner from '../components/Banner';
    import Girls from '../home/Girls';
    import Publish from '../home/Publish';
    export default{
        mounted(){
            console.log(this.$refs.key);
        },
        data(){
            return{
                arrBanner : [
                    {
                        name : '',
                        src : require('../assets/u28_state0.jpg')
                    },
                    {
                        name : '',
                        src : require('../assets/u28_state1.jpg')
                    },
                    {
                        name : '',
                        src : require('../assets/u28_state2.jpg')
                    },
                    {
                        name : '',
                        src : require('../assets/u28_state3.jpg')
                    }
                ]
            }
        },
        components : {
            Banner,
            Girls,
            Publish
        }
    }
</script>
