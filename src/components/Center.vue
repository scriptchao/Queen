<style scoped lang="stylus" rel="stylesheet/stylus">
.center
    height 110px
    position relative
    .left
        float left
        .logo
            font-size 30px
            font-weight 700
            line-height 110px
        .city
            line-height 110px
            font-size 14px
            margin-left 5px
            cursor pointer
            &:hover
               &+.fixedBox
                    display block
        .fixedBox
            width 440px
            height 130px
            background white
            position absolute
            left 99px
            top 70px
            border 1px solid rgb(200,200,200)
            padding 10px
            &:hover
                display block
            .cityAll
                ul
                    overflow hidden
                    li
                        float left
                        margin-left 12px
                        font-size 14px
                        line-height 2
                        a
                            cursor pointer


body
    width 100%
</style>
<template><!--只有数组能这么用吗？？？-->
    <div class="center w1180">
        <div class="left">
            <span class="logo">LOGO</span>
            <span class="city">广东▼</span>
            <div class="fixedBox none">
                <div class="cityAll">
                    <ul v-for="list of arr">
                        <li>{{list.word}}</li>
                        <li v-for="list of list.city">
                            <a :href="list.href">{{list.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cen"></div>
        <div class="right"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arr : [
                    {
                        word : 'A-G',
                        city : [
                            {
                                name : '北京',
                                href : '/'
                            },
                            {
                                name : '安徽',
                                href : '/'
                            },
                            {
                                name : '重庆',
                                href : '/'
                            },
                            {
                                name : '福建',
                                href : '/'
                            },
                            {
                                name : '广东',
                                href : '/'
                            },
                            {
                                name : '广西',
                                href : '/'
                            },
                            {
                                name : '甘肃',
                                href : '/'
                            },
                            {
                                name : '贵州',
                                href : '/'
                            },

                        ]
                    },
                    {
                        word : 'H-J',
                        city : [
                            {
                                name : '河北',
                                href : '/'
                            },
                            {
                                name : '河南',
                                href : '/'
                            },
                            {
                                name : '海南',
                                href : '/'
                            },
                            {
                                name : '湖北',
                                href : '/'
                            },
                            {
                                name : '湖南',
                                href : '/'
                            },
                            {
                                name : '黑龙江',
                                href : '/'
                            },
                            {
                                name : '吉林',
                                href : '/'
                            },
                            {
                                name : '江苏',
                                href : '/'
                            },
                            {
                                name : '江西',
                                href : '/'
                            }
                        ]
                    },
                    {
                        word : 'L-S',
                        city : [
                            {
                                name : '辽宁',
                                href : '/'
                            },
                            {
                                name : '内蒙古',
                                href : '/'
                            },
                            {
                                name : '宁夏',
                                href : '/'
                            },
                            {
                                name : '青海',
                                href : '/'
                            },
                            {
                                name : '上海',
                                href : '/'
                            },
                            {
                                name : '四川',
                                href : '/'
                            },
                            {
                                name : '山东',
                                href : '/'
                            },
                            {
                                name : '山西',
                                href : '/'
                            },
                            {
                                name : '陕西',
                                href : '/'
                            }
                        ]
                    },
                    {
                        word : 'T-Z',
                        city : [
                            {
                                name : '天津',
                                href : '/'
                            },
                            {
                                name : '新疆',
                                href : '/'
                            },
                            {
                                name : '西藏',
                                href : '/'
                            },
                            {
                                name : '云南',
                                href : '/'
                            },
                            {
                                name : '浙江',
                                href : '/'
                            }
                        ]
                    }
                ]

            }
        }
    }
</script>
