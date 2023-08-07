<template>
  <div class="index">
    <div class="main">
      <div class="main-nav_box">
        <div v-for="(item, i) in navList" :key="i" class="main-nav_box-item">
          <img :src="item.imgUrl" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="main-top_box">
        <el-carousel trigger="click" height="100px" :autoplay="false">
          <el-carousel-item v-for="(item, i) in top_carouselList" :key="i">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
        <div class="main-top_box-pic">
          <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="" />
        </div>
      </div>
      <div class="main-header">
        <div class="main-header-title">中央军委举行上将晋升仪式</div>
        <div class="main-header-bottom">
          <div v-for="(item, i) in headerBottomList" :key="i">
            <span class="main-header-bottom-item" @click="toDetail(item.id)">{{
              item.title
            }}</span><span v-if="i !== headerBottomList.length - 1">|</span>
          </div>
        </div>
      </div>
      <div class="main-carousel">
        <!-- <el-carousel direction="vertical" trigger="click" height="400px" :autoplay="false">
          <el-carousel-item v-for="(item, i) in carouselList" :key="i">
            <img class="main-carousel-img" :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel> -->
        <div class="main-carousel-box">
          <img class="main-carousel-img" :src="carouselList[acticeKey].imgUrl" alt="" />
        </div>
        <swiper />
        <div class="main-carousel-right">
          <div v-for="(item,i) in carouselList" :key="i" class="item" :class="i==acticeKey?'item_active':''"
            @click="acticeKey=i">
            {{item.title}}
          </div>
        </div>
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
            <el-tab-pane label="政委建读" name="zwjd">
              <newsBox :list="middle.listTszy" :type="2"></newsBox>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_5" @tab-click="handleClick">
            <el-tab-pane label="公告公示" name="gggs">
              <div class="main-middle-notice">
                <div v-for="(item,i) in middle.notice" :key="i" class="notice_box">
                  <div>
                    <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                      alt="" class="icon">
                    {{item.des}}
                  </div>
                  <div class="bottom">
                    {{item.date}}
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_6" @tab-click="handleClick">
            <el-tab-pane label="利剑视频" name="ljsp">
              <div class="main-middle-video">
                <div class="top">
                  <img :src="middle.video[0][1].img" alt="">
                  <img :src="middle.video[0][2].img" alt="">
                </div>
                <div class="bottom">
                  <div v-for="(item,i) in middle.video[0].slice(2)" :key="i" class="video_box">
                    <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                      alt="" class="icon">
                    <span>{{item.des}}</span>
                  </div>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="利剑光影" name="ljgy">
              <div class="main-middle-video">
                <div class="top">
                  <img :src="middle.video[1][1].img" alt="">
                  <img :src="middle.video[1][2].img" alt="">
                </div>
                <div class="bottom">
                  <div v-for="(item,i) in middle.video[1].slice(2)" :key="i" class="video_box">
                    <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                      alt="" class="icon">
                    <span>{{item.des}}</span>
                  </div>
                </div>

              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <!-- <span class="main-middle-msg-title">网上读书</span> -->
          <el-tabs v-model="activeName_7" @tab-click="handleClick">
            <el-tab-pane label="利剑阅读" name="ljyd">
              <!-- type: 子组件判断样式类型用-->
              <newsBox :list="middle.listTszy" :type="1"></newsBox>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="main-middle-msg">
          <el-tabs v-model="activeName_8" @tab-click="handleClick">
            <el-tab-pane label="利剑之声" name="ljzs">
              <div class="main-middle-voice">
                <div class="top">
                  <img :src="middle.voice[0][1].img" alt="">
                  <img :src="middle.voice[0][2].img" alt="">
                </div>
                <ul class="bottom">
                  <li v-for="(item,i) in middle.voice[0].slice(2)" :key="i" class="voice_box">
                    <span>{{item.des}}</span>
                  </li>
                </ul>

              </div>
            </el-tab-pane>
            <el-tab-pane label="利剑广播" name="ljgy">
              <div class="main-middle-voice">
                <div class="top">
                  <img :src="middle.voice[1][1].img" alt="">
                  <img :src="middle.voice[1][2].img" alt="">
                </div>
                <div class="bottom">
                  <div v-for="(item,i) in middle.voice[1].slice(2)" :key="i" class="voice_box">
                    <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                      alt="" class="icon">
                    <span>{{item.des}}</span>
                  </div>
                </div>

              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="main-top_box">
        <el-carousel trigger="click" height="100px">
          <el-carousel-item v-for="(item, i) in top_carouselList" :key="i">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="main-news">
        <div class="main-news-header">
          <div class="title">部队快讯</div>
          <div v-for="(item,i) in newsHeader" :key="i" class="header_item">
            {{item}}
          </div>
        </div>
        <div class="main-news-coninter">
          <div class="left">
            <div class="top">
              <p class="title">{{newsList.title}}</p>
              <p class="desc">
                <span class="descText">{{newsList.desc}}</span>
                <span class="detail">[详情]</span>
              </p>
            </div>
            <div class="bottom">
              <ul class="listItem">
                <li v-for="(item,i) in newsList.list" :key="i">{{item.des}}</li>
              </ul>
            </div>
          </div>
          <img class="rightImg" :src="newsList.img" alt="">
        </div>
      </div>
      <div class="main-news-list">
        <div class="news-box" v-for="(item , i) in newsThreeList" :key="i">
          <div class="header">
            <div class="title">
              <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="">
              <span>工作指导</span>
            </div>
            <span class="more">+更多</span>
          </div>
          <div class="coninter">
            <ul class="list">
              <div v-for="(itm , j) in item" :key="j" class="list-item">
                <li>{{itm.title}}</li>
                <span class="time">{{'['+itm.time+']'}}</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-pictures">
        <el-tabs type="border-card">
          <el-tab-pane label="利剑先锋">
            <div class="list">
              <div class="list-item" v-for="(item,i) in picturesList" :key="i">
                <img :src="item.img" alt="">
                <p class="name">{{item.name}}</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="main-strategy">
        <div class="left">
          <span class="contribute">我要投稿</span>
          <el-tabs>
            <el-tab-pane label="利剑之策">
              <div class="strategy-list">
                <ul class="list-item">
                  <li v-for="(item,i) in strategyKeyList" :key="i">
                    <span class="list_left">{{item.title}}</span>
                    <span class="list_right">{{item.name}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="学习研究">
              <div class="strategy-list">
                <ul class="list-item">
                  <li v-for="(item,i) in strategyKeyList" :key="i">
                    <span class="list_left">{{item.title}}</span>
                    <span class="list_right">{{item.name}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="利剑锐评">
              <div class="strategy-list">
                <ul class="list-item">
                  <li v-for="(item,i) in strategyKeyList" :key="i">
                    <span class="list_left">{{item.title}}</span>
                    <span class="list_right">{{item.name}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="right">
          <el-tabs>
            <el-tab-pane label="用稿统计">
              <div class="manuscript-list">
                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                  <el-table-column prop="id" label="序号">
                  </el-table-column>
                  <el-table-column prop="name" label="单位">
                  </el-table-column>
                  <el-table-column prop="address" label="本月">
                  </el-table-column>
                  <el-table-column prop="address" label="本年">
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="main-edu">
        <div class="main-edu-left">
          <div class="top">
            <span>教育资源地</span>
            <span>找课程</span>
          </div>
          <div class="coninter">
            <div class="coninter-left">
              <p>热门推送</p>
              <div>
                <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                  alt="">
                <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                  alt="">
                <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                  alt="">
                <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                  alt="">
                <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                  alt="">
                <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"
                  alt="">
              </div>


            </div>
            <div class="coninter-right">
              <div>课程热搜榜</div>
              <div v-for="(item,i) in eduHotlist" :key="i" class="coninter-right-item">
                <div class="coninter-right-item-left">{{i++}}</div>
                <div class="coninter-right-item-right">
                  <img :src="item.img" alt="">
                  <div class="desc">{{item.des}}</div>
                </div>
              </div>
              <div class="coninter-right-bottom">
                <div class="leftButton">我要投稿</div>
                <div class="rightButton">好课推荐&emsp;精品共享</div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-edu-right">
          <el-tabs>
            <el-tab-pane label="用稿统计">
              <div v-for="(item, i) in ljNewslist" :key="i" class="main-edu-right-item">
                <img :src="img" alt="">
                <div class="desc">{{item.title}}</div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./css/index.scss";
  import swiper from "./components/swiper";
  import newsBox from "./components/newsBox";
  export default {
    name: "MainPage",
    components: {
      swiper,
      newsBox,
    },
    data() {
      return {
        // 大标题底部5个按钮的数据
        headerBottomList: [{
            title: "中国共产党",
            id: "123123",
          },
          {
            title: "中国共产党",
            id: "123123",
          },
          {
            title: "中国共产党",
            id: "123123",
          },
        ],
        //12个导航栏
        navList: [{
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: "微信公众号",
          },
        ],
        // 顶部导航栏
        top_carouselList: [{
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: 'sadad'
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: 'sadad'
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: 'sadad'
          },
        ],

        // 轮播图相关
        carouselList: [{
            imgUrl: "http://www.81.cn/syjdt/_attachment/2023/08/03/16241956_e9fc5b94dc35f7e95fe8592cdb17db7f.jpg",
            title: 'sadad'
          },
          {
            imgUrl: "https://tse2-mm.cn.bing.net/th/id/OIP-C.aLLVF4rDEe-FO32tRFGNDAHaEK?pid=ImgDet&rs=1",
            title: 'sadad'
          },
          {
            imgUrl: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            title: 'sadad'
          },
        ],
        acticeKey: 0,
        middle: {
          listTszy: [{
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            },
            {
              title: "112313123123",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            },
            {
              title: "112313123123",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            },
          ],
          notice: [{
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              date: '2022-11-11'
            },
            {
              title: "112313123123",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              date: '2022-11-11'
            },
            {
              title: "112313123123",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              date: '2022-11-11'
            }, {
              title: "112313123123",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              date: '2022-11-11'
            }, {
              title: "112313123123",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              date: '2022-11-11'
            },
          ],
          video: [
            [{
                title: "112313123123000",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              }
            ],
            [{
                title: "112313123123000",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
            ]
          ],
          voice: [
            [{
                title: "112313123123000",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              }
            ],
            [{
                title: "112313123123000",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
              {
                title: "112313123123",
                id: "001",
                des: "描述描述描述描述描述描述描述描述描述描述",
                img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              },
            ]
          ],
        },
        // tab切换相关
        activeName_1: "tszy",
        activeName_2: "jzyw",
        activeName_3: "slpl",
        activeName_4: "zwjd",
        activeName_5: "gggs",
        activeName_6: "ljsp",
        activeName_7: "ljyd",
        activeName_8: "ljzs",

        // 部队快讯顶部
        newsHeader: ['参谋部', '参谋部', '参谋部', '参谋部', '参谋部'],
        // 新闻
        newsList: {
          title: '96603部队文艺轻骑队赴我部展开文艺活动走基层活动',
          desc: "本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯本网讯",
          img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
          list: [{
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11'
          }, {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11'
          }, {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11'
          }, ]
        },
        newsThreeList: [
          [{
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }, {
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }, {
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }

          ],
          [{
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }, {
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }, {
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }

          ],
          [{
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }, {
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }, {
              title: "112313123123000",
              id: "001",
              des: "描述描述描述描述描述描述描述描述描述描述",
              img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
              time: '06/26'
            }

          ]
        ],
        picturesList: [{
            img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            name: '分分分'
          },
          {
            img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            name: '分分分'
          },
          {
            img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            name: '分分分'
          },
          {
            img: 'https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg',
            name: '分分分'
          }
        ],
        strategyKeyList: [{
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
            name: '张三'
          },
          {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
            name: '张三'
          }, {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
            name: '张三'
          }, {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
            name: '张三'
          }
        ],
        tableData: [{
          id: '1',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市',
        }, {
          id: '2',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市'
        }, {
          id: '3',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市',
        }, {
          id: '4',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市'
        }],
        eduHotlist: [{
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
          },
          {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
          },
          {
            title: "112313123123",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
          }
        ],
        ljNewslist: [{
            title: "利剑新闻第一期",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
          },
          {
            title: "利剑新闻第一期",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
          },
          {
            title: "利剑新闻第一期",
            id: "001",
            des: "描述描述描述描述描述描述描述描述描述描述",
            img: "https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg",
            date: '2022-11-11',
          }
        ]
      };
    },
    created() {
      //初始化数据
      this.initial();
    },
    methods: {
      //table 变色
      tableRowClassName({
        row,
        rowIndex
      }) {
        console.log(row);
        if (row.id === '2' || row.id === '3') {
          return 'blue-row';
        } else if (row.id === '1') {
          return 'warning-row';
        }
        return '';
      },

      // 初始化数据
      initial() {

      },
      // 新闻跳转详情
      toDetail(id) {
        this.$router.push({
          name: "newsDetail",
          params: {
            id: id,
          },
        });
      },
      handleClick() {

      }
    },
  };

</script>

<style lang="scss">
  @import "./css/index.scss";

  //table相关
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .blue-row {
    background: #dbf5fa;
  }

</style>
