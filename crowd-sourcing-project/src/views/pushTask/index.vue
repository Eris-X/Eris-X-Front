<template>
  <div class="push-task">
    <el-form ref="form" :model="form" label-width="120px" class="form">
      <el-form-item label="任务名">
        <el-input v-model="form.name" style="width: 300px;"></el-input>
      </el-form-item>
      <el-form-item label="技能需求">
        <el-select
          v-model="form.region"
          placeholder="请选择技能需求"
          multiple
        >
          <el-option label="java" value="java"></el-option>
          <el-option label="javascript" value="javascript"></el-option>
          <el-option label="c++" value="c++"></el-option>
          <el-option label="python" value="python"></el-option>
          <el-option label="go" value="go"></el-option>
          <el-option label="c" value="c"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="信誉分门槛">
        <el-input v-model="form.creditScore" style="width: 220px;"></el-input>
      </el-form-item>
      <el-form-item label="技能分门槛">
        <el-input v-model="form.skillScore" style="width: 220px;"></el-input>
      </el-form-item>
      <el-form-item label="支付规则">
        <el-select
          v-model="form.pay"
          placeholder="请选择支付规则"
        >
          <el-option label="订单/尾款" value="1"></el-option>
          <el-option label="里程碑付款" value="2"></el-option>
          <el-option label="一次性付款" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="薪资">
        <el-input v-model="form.money" style="width: 220px;"></el-input>
      </el-form-item>
      <el-form-item label="任务介绍">
        <el-input type="textarea"  :autosize="{ minRows: 3, maxRows: 6}" v-model="form.intro" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="需求说明">
        <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="form.desc" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" >发布任务</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'PushTask',
  data() {
    return {
      form: {
        name: '', // 任务名称
        skill: [], // 技能需求
        creditScore: '', // 信誉分门槛
        skillScore: '', // 技能分门槛
        pay: '', // 支付规则
        money: '', // 薪资
        intro: '', // 任务介绍
        desc: '', // 需求说明
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style lang="scss" scoped>
  .push-task {
    padding: 20px 30px;
    background: #171c1c;
    border-radius: 20px;
    margin-top: 12px;
    margin-left: 00px;
    margin-right: 00px;

  }
  .form{
    margin-left: 350px;
    margin-right: 200px;

  }
</style>