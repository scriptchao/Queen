<style scoped lang="stylus" rel="stylesheet/stylus">
.footer
    margin-top 55px
a
    font-size 12px
.bottom0
    border-top 1px solid rgb(215, 215, 215)
    overflow hidden
    ul
        float left
        padding 55px 0 45px
        width 200px
        li
            &:nth-child(1)
                margin-bottom 30px
                font-size 18px
                font-weight bold
            a
                line-height 2
    .bottom00
        float right
        width 380px
        .bottom00_left
            float left
            p
                &:first-child
                    font-size 18px
                    font-weight bold
                    padding 55px 0 32px 0
                    &:before
                        content ''
                        background url('../assets/tel.png')
                        display inline-block
                        width 20px
                        height @width
                        vertical-align middle
                &:nth-child(2)
                    font-size 24px
                    font-weight bold
                &:nth-child(3)
                    font-size 14px
                    line-height 2
        .bottom00_right
            float right
            padding-right 50px
            p
                &:first-child
                    font-size 18px
                    font-weight bold
                    padding 55px 0 32px 0
                    text-align center
                &:last-child
                    font-size 13px
                    line-height 2
                    text-align center
            a
                width 85px
                height @width
                background url(../assets/u15.jpg)
                background-size 100% 100%
                display inline-block

.bottom1
    height 40px
    background-color rgb(228, 228, 228)
    a
        margin-right 20px
        line-height 40px

.bottom2
    padding 24px 0
    background-color rgb(242, 242, 242)
    p
        font-size 12px
        line-height 2

</style>
<template>
	<div class="footer">
		<div class="bottom0 w1180">
			<ul v-for="list of arrBottom1Anchors">
				<li>{{list.name}}</li>
				<li v-for="anchor of list.anchor">
					<a>{{anchor.name}}</a>
				</li>
			</ul>
            <div class="bottom00">
                <div class="bottom00_left">
                    <p>客服热线</p>
                    <p>15757123302</p>
                    <p>(周一至周日,9:00-21:00)</p>
                </div>
                <div class="bottom00_right">
                    <p>女王微信</p>
                    <a href="https://www.baidu.com"></a>
                    <p>女王官方微信</p>
                </div>
            </div>
		</div>
		<div class="bottom1">
			<div class="w1180">
				<a v-for="anchor of arrBottom2Anchors" >{{anchor.name}}</a>
			</div>
		</div>
		<div class="bottom2">
			<div class="w1180">
				<p>COPYRIGHT © 2010-2015 女王珠宝有限公司   anqueen.com 保留一切权利。 客服热线：12345678912</p>
				<p>深圳公网安备 XXXXXXXXXX | 京ICP证XXXXXX号 | 营业执照</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrBottom1Anchors : [
					{
						name : "使用帮助",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "支付方式",
						anchor : [
							{
								name : "货到付款",
								href : "/rookie"
							},
							{
								name : "在线支付",
								href : "/qa"
							},
							{
								name : "余额支付",
								href : "/help"
							},
							{
								name : "现金券支付",
								href : "/agreement"
							}
						]
					},
					{
						name : "配送方式",
						anchor : [
							{
								name : "包邮政策",
								href : "/rookie"
							},
							{
								name : "配送说明",
								href : "/qa"
							},
							{
								name : "运费说明",
								href : "/help"
							},
							{
								name : "验货签收",
								href : "/agreement"
							}
						]
					},
					{
						name : "售后服务",
						anchor : [
							{
								name : "品牌承诺",
								href : "/rookie"
							},
							{
								name : "售后咨询",
								href : "/qa"
							},
							{
								name : "退货政策",
								href : "/help"
							},
							{
								name : "退货办理",
								href : "/agreement"
							}
						]
					}
				],
				arrBottom2Anchors : [
					{
						name : "关于女王珠宝",
						href : "/about"
					},
					{
						name : "申请代言",
						href : "/apply"
					},
					{
						name : "加入女王珠宝",
						href : "/join"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "媒体报道",
						href : "/media"
					},
					{
						name : "商务合作",
						href : "/business"
					}
				]
			}
		}
	}
</script>
