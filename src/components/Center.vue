<style scoped lang="stylus" rel="stylesheet/stylus">
.center
    overflow hidden
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
            &:hover
               &+.fixedBox
                    display block
body
    width 100%
</style>
<template>
    <div class="center w1180">
        <div class="left">
            <span class="logo">LOGO</span>
            <span class="city">广东▼</span>
            <div class="fixedBox">
            </div>
        </div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                word1 : 'A-G',
                city1 : [
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

                ],
                word2 : 'H-J',
                city2 : [
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
                ],
                word3 : 'L-S',
                city3 : [
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
                ],
                word4 : 'T-Z',
                city4 : [
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
        }
    }
</script>
