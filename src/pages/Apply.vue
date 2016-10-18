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
    form
        margin-top 30px
        padding 26px
        width 872px
        border 1px solid rgb(242,242,242)
        label
            font-size 14px
            &:not([for='stl'])
                display block
                margin-top 30px
        .image
            float left
            width 100px
            height 100px
            background rgb(242,242,242)
            background-repeat no-repeat
            background-size contain
            [type='file']
                width @height
                height @width
                opacity 0
        .ipt-txt
            margin-top 16px
        .div
            overflow hidden
            p
                line-height 100px
                padding-left 130px
                a
                    color darkred
                    cursor pointer
                    padding-left 30px
        #stl
            width 100px
            height 25px
        #ipt
            width 651px
            height 30px
        .tel
            width 210px
            height 30px
        .code
            width 130px
            height 30px
            background rgb(242,242,242)
            border 1px solid rgb(169,169,169)
        .detail
            width 651px
            height 180px
        .next
            width 100px
            height 30px
            border-radius 5px
            background rgb(133,133,133)
            border none
            margin-top 30px

body
    width 100%
</style>
<template>
    <div class="apply w1180">
        <div class="meter step2">
            <div class="circle done">1</div>
            <div class="circle done">2</div>
            <div class="circle normal">3</div>
            <div class="progress"></div>
        </div>
        <form>
            <div>
                <label for="stl">选择类目:</label>
                <select  id="stl" v-model="type">
                    <option v-for="item of arrTypes" :value="item.value" v-text="item.name"></option>
                </select>
            </div>
            <div>
                <label for="ipt">简单描述您的需求:</label>
                <input class="ipt-txt" id="ipt" v-model="req" @input="handleValidate('req',$event)">
            </div>
            <div>
                <label>留下您的联系方式，方便交易顾问联系您:</label>
                <input class="ipt-txt tel" placeholder="请输入手机号码" v-model="tel" @input="handleValidate('tel', $event)">
                <input type="button" value="获取手机验证码" class="code">
                <br/>
                <input  class="ipt-txt tel" placeholder="请输入手机验证码" v-model="code" @input="handleValidate('code', $event)">
            </div>
            <div>
                <label for="">说说您的具体要求:</label>
                <textarea class="ipt-txt detail" v-model="detail" @input="handleValidate('detail', $event)"></textarea>
            </div>
            <div class="ipt-txt div">
                <div class="image" :style="{'background-image' : 'url(' + path + ')'}">
                    <input type="file" @change="handleChange">
                </div>
                <p>
                    <span v-text="msg">最多可添加5个附件，每个大小不超过2M</span>
                    <a>上传遇到问题？</a>
                </p>
            </div>
            <input type="button" value="下一步>" class="next" @click="handleNext">
        </form>
        <div class="info"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arrTypes : [
                    {
                        name : '首发申请',
                        value : '111'
                    },
                    {
                        name : '创意申请',
                        value : '222'
                    },
                    {
                        name : '定制申请',
                        value : '333'
                    },
                ],
                path : '',
                type : '333',
                req : '',
                tel : "",
                code : "",
                detail : "",
                msg : "最多可添加5个附件，每个大小不超过2M"
            }
        },
        methods : {
            handleChange(e){
                console.log(e.target);
                console.log(e);
                const fileReader = new FileReader();
                fileReader.onload = e => {
                    console.log(e);
                    this.path = e.target.result;
                };
                e.target.files.length && fileReader.readAsDataURL(e.target.files[0]);
                /*&& /jpe?g|png|bmp|gif/.test(e.target.files.type)*/
            },
            handleNext(){
                console.log(this.type, this.req, this.tel, this.code, this.detail);
            },
            handleValidate(type,e){
                const value = this[type];
                this.msg = (/<script>/.test(value) || !({
                    tel : /^1[3578]\d{9}$/,
                    code : /^\d{6}$/
                }[type] || /.*/).test(value)) ? "您的输入有误" : "";
            }
        }
    }
</script>
