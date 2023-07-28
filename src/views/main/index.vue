<template>
  <div class="index">
    <div class="main">
      <div class="main-nav_box">
        <div v-for="(item,i) in navList" :key="i" class="main-nav_box-item">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="main-top_box">
        <el-carousel trigger="click" height="100px">
          <el-carousel-item v-for="(item,i) in top_carouselList" :key="i">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="main-top_box-pic">
          <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="">
        </div>
      </div>
      <div class="main-header">
        <div class="main-header-title">中央军委举行上将极盛一时</div>
        <div class="main-header-bottom">
          <div v-for="(item,i) in headerBottomList" :key="i"><span class="main-header-bottom-item"
              @click="toDetail(item.id)">{{item.title}}</span><span v-if="i!==headerBottomList.length-1">|</span>
          </div>
        </div>
      </div>
      <div class="main-carousel">
        <el-carousel direction="vertical" trigger="click" height="400px">
          <el-carousel-item v-for="(item,i) in carouselList" :key="i">
            <img class="main-carousel-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
        <swiper />
      </div>
      <div class="main-middle">
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_1" @tab-click="handleClick">
            <el-tab-pane label="统帅足印" name="tszy">
              <!-- type: 子组件判断样式类型用-->
              <newsBox :list="middle.listTszy" :type="1"></newsBox>

            </el-tab-pane>
            <el-tab-pane label="重要论述" name="zyls">重要论述</el-tab-pane>
            <el-tab-pane label="评论解读" name="pljd">评论解读</el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_2" @tab-click="handleClick">
            <el-tab-pane label="军政要闻" name="jzyw">
              <newsBox :list="middle.listTszy" :type="2"></newsBox>

            </el-tab-pane>
            <el-tab-pane label="社论评论" name="slpl">社论评论</el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_3" @tab-click="handleClick">
            <el-tab-pane label="社论评论" name="slpl">
              <newsBox :list="middle.listTszy" :type="3"></newsBox>

            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_3" @tab-click="handleClick">
            <el-tab-pane label="社论评论" name="slpl">
              <!-- type: 子组件判断样式类型用-->
              <newsBox :list="middle.listTszy" :type="4"></newsBox>

            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_4" @tab-click="handleClick">
            <el-tab-pane label="军政要闻" name="zwjd">
              <newsBox :list="middle.listTszy" :type="2"></newsBox>

            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg"></div>
        <div class="main-middle-msg"></div>
        <div class="main-middle-msg">
          <span class="main-middle-msg-title">网上读书</span>
          <el-tabs v-model="activeName_8" @tab-click="handleClick">
            <el-tab-pane label="利剑阅读" name="ljyd">
              <!-- type: 子组件判断样式类型用-->
              <newsBox :list="middle.listTszy" :type="1"></newsBox>

            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import "./css/index.scss";
  import swiper from './components/swiper'
  import newsBox from './components/newsBox'
  export default {
    name: 'MainPage',
    components: {
      swiper,
      newsBox
    },
    data() {
      return {
        // 大标题底部5个按钮的数据
        headerBottomList: [{
            title: '中国共产党',
            id: '123123'
          },
          {
            title: '中国共产党',
            id: '123123'
          },
          {
            title: '中国共产党',
            id: '123123'
          }
        ],
        //12个导航栏
        navList: [{
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'

          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            title: '微信公众号'
          },
        ],
        // 顶部导航栏
        top_carouselList: [{
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
          }
        ],

        // 轮播图相关
        carouselList: [{
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
          },
          {
            imgUrl: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
          }
        ],
        middle: {
          listTszy: [{
              title: '112313123123000',
              id: '001',
              des: '描述描述描述描述描述描述描述描述描述描述',
              img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
            },
            {
              title: '112313123123',
              id: '001',
              des: '描述描述描述描述描述描述描述描述描述描述',
              img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
            },
            {
              title: '112313123123',
              id: '001',
              des: '描述描述描述描述描述描述描述描述描述描述',
              img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg'
            }
          ]
        },
        // tab切换相关
        activeName_1: 'tszy',
        activeName_2: 'jzyw',
        activeName_3: 'slpl',
        activeName_4: 'zwjd',
        activeName_5: 'gggs',
        activeName_8: 'ljyd'
      };
    },
    created() {
      //初始化数据
      this.initial()

    },
    methods: {
      // 新闻跳转详情
      toDetail(id) {
        this.$router.push({
          name: 'newsDetail',
          params: {
            id: id
          }
        })
      }
    },
  };

</script>

<style lang="scss" scoped>
  @import "./css/index.scss";

</style>
