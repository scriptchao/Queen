<style scoped lang="stylus" rel="stylesheet/stylus">
    .apply
        overflow hidden
        .meter
            position relative
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
                line-height @height
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
</style>
<template>
    <div class="apply w1180">
        <div class="meter step2">
            <div class="circle done">1</div>
            <div class="circle done">2</div>
            <div class="circle normal">3</div>
            <div class="progress"></div>
        </div>
    </div>
</template>
<script>
</script>
