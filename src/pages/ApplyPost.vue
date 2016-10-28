<style scoped lang="stylus" rel="stylesheet/stylus">
    .apply
        overflow hidden
        .meter
            position relative
            overflow hidden
            &.step1
                .progress
                    border-right-width 705px
                    border-left-width 475px
            &.step2
                .progress
                    border-right-width 471px
                    border-left-width 709px
            &.step3
                .progress
                    border-right-width 0
                    border-left-width 1180px
            .progress
                position absolute
                top 89px
                height 2px
                border-style none solid
                border-right-color rgb(188, 188, 188)
                border-left-color black
            .circle
                position relative
                float left
                margin-top 70px
                width 36px
                height @width
                border-width 2px
                border-style solid
                border-radius 50%
                text-align center
                line-height 34px
                z-index 1
                &.normal
                    background-color white
                    border-color rgb(188, 188, 188)
                &.done
                    background-color black
                    border-color @background-color
                    color white
                &:before
                    position absolute
                    top -44px
                    left ((@width + @border-width * 2) / 2)
                    font-size 15px
                    white-space nowrap
                    color black
                    transform translateX(-50%)
                &:nth-of-type(1)
                    margin-left 338px
                    &:before
                        content "描述您的需求"
                &:nth-of-type(2)
                    margin-left 194px
                    &:before
                        content "预览您的需求"
                &:nth-of-type(3)
                    margin-left 194px
                    &:before
                        content "发送需求成功"
        form
            float left
            margin-top 30px
            padding 26px
            width 872px
            height 723px
            border 1px solid rgb(242,242,242)
            font-size 14px
            position relative
            div
                margin-left 260px
                margin-top 190px
                display inline-block
                position relative
                &:before
                    content ''
                    background url(../assets/laugh.jpg)
                    display inline-block
                    width 45px
                    height 45px
                    position absolute
                    top 0
                    left -70px
                p
                    line-height 1.8
                    &:nth-of-type(4)
                        margin-top 38px
                .size16
                    font-size 16px
                a
                    width 140px
                    height 30px
                    border-radius 5px
                    background rgb(166,166,166)
                    display inline-block
                    text-align center
                    line-height @height
                    color white
                    margin-right 15px
                    margin-top 20px

    body
        width 100%
</style>
<template>
    <div class="apply w1180">
        <div class="meter step3">
            <div class="circle done">1</div>
            <div class="circle done">2</div>
            <div class="circle done">3</div>
            <div class="progress"></div>
        </div>
        <form>
            <div>
                <p class="size16">恭喜！您的创意已经发布成功</p>
                <p class="size16">请耐心等待，我能会在24小时之内回复</p>
                <p class="size16">从而进一步与您沟通创意，助您早日成为女王！</p>
                <p>您可以：</p>
                <router-link :to="'/applyStart'">继续发布需求</router-link>
                <router-link :to="'/'">逛逛街买首饰</router-link>
            </div>

        </form>
        <apply-right></apply-right>
    </div>

</template>
<script>
    import ApplyRight from '../components/ApplyRight'
    export default{
        data(){
            return{

            }
        },
        components:{
            ApplyRight
        }

    }
</script>
