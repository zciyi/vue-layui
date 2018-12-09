<template>
    <div>
        <form class="layui-form" action="" >
            <div class="layui-form-item" v-for="(item, key) in form" v-if="form">
                <label class="layui-form-label" :required="(item.required?true:false)">{{item.label}}</label>
                <div class="layui-input-block" >
                    <input :type="(item.subtype||'text')" 
                    v-model="item.model" 
                    :required="(item.required?true:false)"  
                    :lay-verify="(item.required?'required':'')" 
                    :placeholder="(item.placeholder||'请输入')" 
                    :autocomplete="(item.autocomplete||'off')"  
                    class="layui-input"
                    v-if="item&&item.type==='input'">
                    <select name="interest" :lay-verify="(item.required?'required':'')"  v-if="item&&item.type==='select'">
                        <option value="">{{item.placeholder||'请选择'}}</option>
                        <option :value="i.val" v-for="(i, subkey) in item.items" :selected='item.model'>{{i.text}}</option>
                    </select>
                    <input type="checkbox" 
                    :name="i.val" 
                    :value="i.val" 
                    v-for="(i, subkey) in item.items" 
                    :title="i.text" 
                    :checked="i.checked"
                    v-if="item&&item.type==='checkbox'">
                    <input type="radio" 
                    :name="i.val" 
                    :value="i.val" 
                    v-for="(i, subkey) in item.items" 
                    :title="i.text" 
                    :checked="item.model"
                    v-if="item&&item.type==='radio'">
                    <input type="checkbox" 
                    name="switch" 
                    lay-skin="switch"
                    :checked="item.model"
                    v-if="item&&item.type==='switch'">
                    <textarea  
                    :placeholder="item.placeholder||'请输入'" 
                    class="layui-textarea"
                    v-if="item&&item.type==='textarea'" 
                    v-model="item.model"></textarea>
                    <slot v-if="item.slot" :name='item.slot'></slot>

                </div>
                <div class="layui-form-mid layui-word-aux" v-show="item.tip">{{item.tip||''}}</div>
            </div>
        </form>
    </div>
    
</template>
<script>
import util from '../../common/util';
import Bus from '../../common/bus'
console.log(Bus)

var validate = function(dat){
    dat.forEach((d) => {
        if(!util.isUndefined(d.key)){
            if(d.model===null){
                d.model = ''
            }
        }
    });
}



export default {
    props: ['form'],
    created(){
        Bus.$on('form.validate',function(cb){
            var form  = this.form
            cb&&cb({
                form:form,
                validate:false
            })

        })
    },
    methods:{
        count:function(cb){
            var form  = this.form
            cb&&cb({
                form:form,
                validate:false
            })
        }
    },
    mounted(){

        layui.use('form', function(){
            var form = layui.form;
            
            //监听提交
            // form.on('submit(formDemo)', function(data){
            //     layer.msg(JSON.stringify(data.field));
            //     return false;
            // });
        });
    }

}
</script>

