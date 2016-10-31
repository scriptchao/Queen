<style scoped rel="stylesheet/stylus" lang="stylus">
.header
    background rgb(242, 242, 242)
    font-size 14px
    height 30px
    .main
        p
            line-height @height
            float left
        .right
            float right
            line-height @height
            a
                &:not(:last-child)
                    padding-right 10px
                    border-right 1px solid rgb(100,50,130)
                    height 14px
                    display inline-block
                &:not(:first-child)
                    margin-left 10px
                &:hover
                    color rgb(255,74,1)
body
    width 100%
    </style>
<template>
    <div class="header">
        <div class="main w1180">
            <p>热线电话：15757123302</p>
            <div class="right">
                <router-link v-for="list of arr" :to="list.href">{{list.name}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arr: [
                    {
                        name: '登录',
                        href: '/login'
                    },
                    {
                        name: '注册',
                        href: '/sign'
                    },
                    {
                        name: '品牌商',
                        href: '/'
                    },
                    {
                        name: '女王帮助',
                        href: '/'
                    }

                ]

            }
        }
    }
</script>
