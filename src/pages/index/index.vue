<template>
  <div>
      <l-form :form="form" ref="aaa"> </l-form>
      <div>
          <button class="layui-btn" @click="submit()">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
      </div>
  </div>
</template>

<script>
import Bus from '../../common/bus'
import lForm from '../../components/form/form'
export default {
    data () {
        return {
            form:[{
                label:"测试inputtext",
                model:"sss",
                type:'input',
                required:true,
                placeholder:'请输入测试inputtext'

            },{
                label:"测试inputtext",
                model:"sss",
                type:'input',
                required:false,
                placeholder:'请输入测试inputtext'

            },{
                label:"测试select",
                model:1,
                type:'select',
                items:[{
                    val:1,
                    text:'ha'
                },{
                    val:2,
                    text:'hei'
                }],
                required:true,
                placeholder:'选择'
            },{
                label:"测试checkbox",
                type:'checkbox',
                items:[{
                    val:1,
                    text:'ha',
                    checked:true
                },{
                    val:2,
                    text:'hei',
                    checked:true
                }]
            }]
        }
    },
    mounted(){
        // this.$refs.aaa.count(function(){
        //         console.log('ddd')
        //     });
    }
    ,methods:{
        submit(){
            // this.$refs.aaa.count(function(e){
            //     console.log(e)
            // });
            Bus.$emit('form.validate',function(result){
                console.log(result)
            })
        },
        doSomething(){
                console.log('result')

        }
    }
    ,components: {
        lForm:lForm
    }
}
</script>
