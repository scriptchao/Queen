<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
<template>
    <div class="publish">
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
                        src : require('../assets/5ayl5mHk-0.png')
                    },
                    {
                        name : '图片2',
                        src : require('../assets/5ayl5mHk-1.png')
                    },
                    {
                        name : '图片3',
                        src : require('../assets/5ayl5mHk-2.png')
                    },
                    {
                        name : '图片4',
                        src : require('../assets/5ayl5mHk-3.png')
                    }
                ]
            }
        },
        components : {
            Banner
        }
    }
</script>
