<style scoped lang="stylus" rel="stylesheet/stylus">
.banner
    position relative
    height 350px
    text-align center
    a
        position absolute
        width 100%
        height 350px
        top 0
        left 0
        cursor pointer
        &.current
            z-index 1
    em
        position relative
        top 330px
        margin 0 10px
        padding 2.5px 30px
        background-color rgb(188, 188, 188)
        font-size 0
        vertical-align top
        z-index 2
        &.current
            background white
body
    width 100%
</style>
<template>
    <div class="banner">
        <a v-for="(item,index) in data" :title="item.name" :style="{'background-image' : 'url(' + item.src + ')'}" :class="{current : index === currentIndex}"></a>
        <em v-for="index in len" :class="{current : index === currentIndex + 1}" @click="handleClick(index - 1)"></em>
    </div>
</template>
<script>
    let t;
    const timer = callback => {
        t = setInterval(() =>{
            callback();
        },3000)
    };
    export default{
        props : ['data'],
        created(){
            /*console.log(this);*/
        },
        data(){
            return{
               currentIndex : 0
            }
        },
        computed : {
            len(){
                return this.data.length;
            }
        },
        methods : {
            handleClick(index){
                clearInterval(t);
                this.currentIndex = index;
                /*setInterval(() =>{
                    this.currentIndex = this.currentIndex == this.len - 1  ? 0 : this.currentIndex + 1
                },1000)*/
                timer(() =>{
                    this.currentIndex = this.currentIndex == this.len - 1  ? 0 : this.currentIndex + 1
                })
            }
        },
        mounted(){
            timer(() =>{
                this.currentIndex = this.currentIndex == this.len - 1  ? 0 : this.currentIndex + 1
            })
        }
    }

</script>
