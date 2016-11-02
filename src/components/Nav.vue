<style scoped lang="stylus" rel="stylesheet/stylus">
.nav
    height 40px
    background rgb(188, 188, 188)
    .w1180
        .all
            position relative
            z-index 10
            float left
            width 180px
            height @height
            text-align center
            line-height @height
            white-space nowrap
            background rgb(173,173,173)
            cursor pointer
            &:hover
                .fixBox
                    display block
            i
                position relative
                float left
                display inline-block
                width 13px
                height 10px
                top 50%
                transform translate(@width,-@height/2)
                box-shadow 0 2px black inset,0 4px rgb(173,173,173) inset,0 6px black inset,0 8px rgb(173,173,173) inset,0 10px black inset
            span
                &:after
                    content '∨'
                    display inline-block
                    float right
                    position relative
                    top 13px
                    right 20px
                    font-size 14px
            .fixBox
                width 181px
                position absolute
                border 1px solid rgb(203,203,203)
                background white
                padding 15px 0 0 15px
                text-align left
                display none
                &:hover
                    display block
                p
                    font-size 15px
                    font-weight bold

                a
                    font-size 13px
                    display inline-block
                    padding 17px 12px 17px 0
                    &:hover
                        color rgb(255,74,0)

        &>a
            padding 0 30px
            font-size 14px
            line-height @height
            &:hover
                color rgb(255,74,1)
</style>

<template>
    <div class="nav">
        <div class="w1180">
            <div class="all">
                <i></i>
                <span>全部商品</span>
                <div class="fixBox">
                    <div v-for="item in arrBox">
                        <p v-text="item.name"></p>
                        <a v-for="list in item.arrSrc" v-text="list.name" :href="list.src" :class="{red : list.red}"></a>
                    </div>

                </div>
            </div>
            <router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list: [
                    {
                        name: '首页',
                        href: '/'
                    },
                    {
                        name: '品牌首发',
                        href: '/publish'
                    },
                    {
                        name: '品牌街',
                        href: '/street'
                    },
                    {
                        name: '为我代言',
                        href: '/represent'
                    },
                    {
                        name: '创意申请',
                        href: '/applyStart'
                    },
                    {
                        name: '活动',
                        href: '/activity'
                    }
                ],
                arrBox : [
                    {
                        name : '砖石',
                        arrSrc : [
                            {
                                name : '30分',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : '50分',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : '克拉钻',
                                src : 'https://www.baidu.com',
                                red : 1
                            }
                        ]
                    },
                    {
                        name : '钻戒',
                        arrSrc : [
                            {
                                name : '30分',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : '50分',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : '铂金',
                                src : 'https://www.baidu.com',
                                red : 1
                            }
                        ]
                    },
                    {
                        name : '对戒',
                        arrSrc : [
                            {
                                name : '铂金对戒',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : 'K金对戒',
                                src : 'https://www.baidu.com',
                                red : 0
                            }
                        ]
                    },
                    {
                        name : '配饰',
                        arrSrc : [
                            {
                                name : '吊坠',
                                src : 'https://www.baidu.com',
                                red : 1
                            },
                            {
                                name : '项链',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : '套链',
                                src : 'https://www.baidu.com',
                                red : 0
                            }
                        ]
                    },
                    {
                        name : '系列产品',
                        arrSrc : [
                            {
                                name : '宠爱婚戒',
                                src : 'https://www.baidu.com',
                                red : 0
                            }
                        ]
                    },
                    {
                        name : '热门产品',
                        arrSrc : [
                            {
                                name : '50分裸钻',
                                src : 'https://www.baidu.com',
                                red : 0
                            },
                            {
                                name : '70分裸钻',
                                src : 'https://www.baidu.com',
                                red : 1
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
