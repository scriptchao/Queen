<style scoped rel="stylesheet/stylus" lang="stylus">
    .info
        float right
        padding 35px 30px
        margin-top 30px
        background rgb(241,241,241)
        width 308px
        .info_1
        .info_2
            border-bottom 1px dashed rgb(214,214,214)
            padding-bottom 45px
            p
                font-size 14px
                line-height 1.5
            span
                display inline-block
                padding-bottom 20px

        .info_2
            margin-top 40px
            .info2_tel
                font-size 20px

        img
            width 200px
            height @width
            margin-top 56px
            margin-bottom 56px
</style>
<template>
    <div class="info">
        <div class="info_1">
            <span>保障交易安全</span>
            <p>个人资料绝不泄露</p>
            <p>交易问题一律赔偿</p>
            <p>不收取任何费用</p>
        </div>
        <div class="info_2">
            <span>联系客服帮你发需求</span>
            <p>客服电话</p>
            <p class="info2_tel">15757123301</p>
            <p>(周一至周日,9:00-21:00)</p>
        </div>
        <img src="../assets/u15.jpg" alt="">
    </div>
</template>
