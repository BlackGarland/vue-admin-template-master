<template>
  <div>
    <el-row :gutter="20" style="margin-top:10px;">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>信箱详情</span>
            </div>
            <div class="img-box">
              <img :src="dataForm.img" alt="">
            </div>
            <div class="name-role">
              <span class="sender">{{dataForm.nickName}}</span>
            </div>
            <div class="registe-info">
              <span class="registe-info">
                提交时间：2020/4/10 9:40:33
              </span>
            </div>
            <el-divider></el-divider>
            <div class="personal-relation">
              <div class="relation-item">手机号: <div style="float: right; padding-right:20px;">{{dataForm.phone}}</div>
              </div>
            </div>
            <div class="personal-relation">
              <div class="relation-item">所属部队: <div style="float: right; padding-right:20px;">部队111</div>
              </div>
            </div>
            <div class="personal-relation">
              <div class="relation-item">性别: <div style="float: right; padding-right:20px;">{{dataForm.sex}}</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>基本资料</span>
            </div>
            <div>
              <el-form label-width="80px" v-model="dataFrom" size="small" label-position="right">
                <el-form-item label="信箱内容" prop="nickName">
                  <!-- <el-input auto-complete="off" v-model="dataForm.nickName"></el-input> -->
                  <div v-html="dataForm.content"></div>
                </el-form-item>
                <!-- <el-form-item label="手机号" prop="phone"> -->
                <!-- <el-input auto-complete="off" v-model="dataForm.phone"></el-input> -->
                <!-- </el-form-item> -->
                <el-form-item label="回复内容">
                  <vue-editor v-model="content"></vue-editor>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button size="mini" type="primary" @click="submit">提交</el-button>
                <el-button size="mini" type="warning" @click="close">返回</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import {
    VueEditor
  } from "vue2-editor";
  import {
    answerMsg
  } from '@/api/table'
  export default {
    components: {
      VueEditor
    },
    data() {
      return {
        userMsg: {},
        dataForm: {
          nickName: '士兵111',
          phone: '173567777777',
          sex: '男',
          img: 'https://ts1.cn.mm.bing.net/th/id/R-C.ec25472781321f4b2bcc99a45235444d?rik=PKWm%2bHx9jfgk5g&riu=http%3a%2f%2fimg.sj33.cn%2fuploads%2fallimg%2f201003%2f20100302232530778.jpg&ehk=zv%2bAQ8qLUGh%2f3HQrNlkjNFEwzQETbPu9%2fU8dLr4nWhI%3d&risl=&pid=ImgRaw&r=0',
          content: '<span>Some initial content</span>'
        },
        content: ''
      }
    },
    created() {
      this.userMsg = this.$router.params
    },
    methods: {
      // 提交
      submit() {
        const params = {
          id: this.userMsg.id,
          content: this.dataForm.content
        }
        answerMsg(params).then(() => {
          this.$message({
            type: 'success',
            message: `提交成功`
          });
        })
      }
    },
  }

</script>

<style lang="scss" scoped>
  //卡片样式
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

  .img-box {
    display: flex;
    padding: 20px;
    justify-content: center;

    img {
      width: 190px;
      height: 250px;
    }
  }

  //文本样式区
  .name-role {
    font-size: 16px;
    padding: 5px;
    text-align: center;
  }

  .sender {
    text-align: center;
  }

  .registe-info {
    text-align: center;
    padding-top: 10px;
  }

  .personal-relation {
    font-size: 16px;
    padding: 0px 5px 15px;
    margin-right: 1px;
    width: 100%
  }

  .relation-item {
    padding: 12px;

  }

  .dialog-footer {
    padding-top: 10px;
    padding-left: 10%;
  }

  //布局样式区
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
