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
          <el-carousel-item v-for="item in top_carouselList" :key="item">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="main-top_box-pic">
          <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="">
        </div>
      </div>
      <div class="main-carousel">
        <el-carousel direction="vertical" trigger="click" height="400px">
          <el-carousel-item v-for="(item,i) in carouselList" :key="i">
            <img class="main-carousel-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <swiper />
    </div>

  </div>
</template>

<script>
  import "./css/index.scss";
  import swiper from './components/swiper'
  export default {
    name: 'MainPage',
    components: {
      swiper
    },
    data() {
      return {
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
        ]
      };
    },
    methods: {},
  };

</script>

<style lang="scss" scoped>
  @import "./css/index.scss";

</style>
