<template>
  <div>
    <form class="layui-form" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">输入框</label>
        <div class="layui-input-block">
          <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码框</label>
        <div class="layui-input-inline">
          <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
        <div class="layui-form-mid layui-word-aux">辅助文字</div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">选择框</label>
        <div class="layui-input-block">
          <select name="city" lay-verify="required">
            <option value=""></option>
            <option value="0">北京</option>
            <option value="1">上海</option>
            <option value="2">广州</option>
            <option value="3">深圳</option>
            <option value="4">杭州</option>
          </select>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">复选框</label>
        <div class="layui-input-block">
          <input type="checkbox" name="like[write]" title="写作">
          <input type="checkbox" name="like[read]" title="阅读" checked>
          <input type="checkbox" name="like[dai]" title="发呆">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">开关</label>
        <div class="layui-input-block">
          <input type="checkbox" name="switch" lay-skin="switch">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">单选框</label>
        <div class="layui-input-block">
          <input type="radio" name="sex" value="男" title="男">
          <input type="radio" name="sex" value="女" title="女" checked>
        </div>
      </div>
      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label">文本域</label>
        <div class="layui-input-block">
          <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
    <ul class="layui-timeline">
      <li class="layui-timeline-item">
        <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
        <div class="layui-timeline-content layui-text">
          <h3 class="layui-timeline-title">8月18日</h3>
          <p>
            layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。
            <br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。
            <br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔 <i class="layui-icon"></i>
          </p>
        </div>
      </li>
      <li class="layui-timeline-item">
        <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
        <div class="layui-timeline-content layui-text">
          <h3 class="layui-timeline-title">8月16日</h3>
          <p>杜甫的思想核心是儒家的仁政思想，他有“<em>致君尧舜上，再使风俗淳</em>”的宏伟抱负。个人最爱的名篇有：</p>
          <ul>
            <li>《登高》</li>
            <li>《茅屋为秋风所破歌》</li>
          </ul>
        </div>
      </li>
      <li class="layui-timeline-item">
        <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
        <div class="layui-timeline-content layui-text">
          <h3 class="layui-timeline-title">8月15日</h3>
          <p>
            中国人民抗日战争胜利72周年
            <br>常常在想，尽管对这个国家有这样那样的抱怨，但我们的确生在了最好的时代
            <br>铭记、感恩
            <br>所有为中华民族浴血奋战的英雄将士
            <br>永垂不朽
          </p>
        </div>
      </li>
      <li class="layui-timeline-item">
        <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
        <div class="layui-timeline-content layui-text">
          <div class="layui-timeline-title">过去</div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },mounted(){

    layui.use('form', function(){
      var form = layui.form;
      
      //监听提交
      form.on('submit(formDemo)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
      });
    });
  }
}
</script>
