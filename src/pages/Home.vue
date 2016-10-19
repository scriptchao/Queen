<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
<template>
    <div class="home">
        <banner :data="arrBanner"></banner>
    </div>
</template>
<script>
    import Banner from '../components/Banner';
    export default{
        data(){
            return{
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
