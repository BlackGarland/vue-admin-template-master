<template>
  <div class="newsBox">
    <div v-if="type==1" class="newsBox_top1">
      <img :src="list[0].img" alt="">
      <div class="newsBox-right">
        <p class="newsBox-right_title">{{list[0].title}}</p>
        <p class="newsBox-right_des">{{list[0].des}} <span>[详细]</span></p>
      </div>
    </div>
    <div v-if="type==3" class="newsBox_top1">
      <div class="newsBox-coverImg">
        <span>新华时评：1233112313123123123123</span>
      </div>
    </div>
    <div v-if="type==4" class="newsBox_top2">
      <div class="newsBox_top2-header">
        <div class="newsBox_top2-header-left">
          <img class="newsBox_top2-header-icon"
            src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="">
          <p>媒体上的96711</p>
        </div>
        <div class="newsBox_top2-header-more">更多 ></div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="报刊" name="bk"></el-tab-pane>
        <el-tab-pane label="配置管理" name="sp"></el-tab-pane>
        <el-tab-pane label="新媒体" name="xmt"></el-tab-pane>
      </el-tabs>
      <div class="newsBox_top2-imgBox">
        <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="">
        <img src="https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg" alt="">
      </div>

    </div>
    <ul class="newsBox-list" v-if="type !==4">
      <li v-for="(item,i) in list.slice(Number(topLength), list.length)" :key="i">
        <span>{{item.title}}</span>
      </li>
    </ul>
    <ul class="newsBox-list" v-else>
      <li v-for="(item,i) in listData.slice(Number(topLength), list.length)" :key="i">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      list: {
        type: Array,
        default: () => {
          return []
        }
      },
      type: {
        type: Number,
        default: 0
      },

    },
    watch: {
      // type(oldval, newval) {


      // }
    },
    created() {
      switch (this.type) {
        case 1, 3:
          this.topLength = 1;
          break
        case 2, 5:
          this.topLength = 0;
          break
        case 4:
          this.topLength = 2;

      }
    },
    data() {
      return {
        listData: this.list,
        activeName: 'bk'
      }
    },
    methods: {
      handleClick(val) {
        // this.
      }
    },
  }

</script>

<style lang="scss" scoped>
  .newsBox {
    &_top1 {
      display: flex;
      margin-bottom: 20px;

      img {
        width: 150px;
        height: 100px;
        margin-right: 20px;
      }
    }

    &_top2 {
      &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        line-height: 40px;
        align-items: center;

        &-icon {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }

        p {
          font-size: 16px;
          font-weight: 600;
          color: blue;

        }

        &-left {
          display: flex;
          align-items: center;
        }

        &-more {
          font-size: 16px;
          color: blue;
        }


      }

      &-imgBox {
        display: flex;
        height: 80px;
        justify-content: space-between;

        img {
          width: 47%;
        }
      }

      ::v-deep .el-tabs__nav-wrap::after {
        display: none !important;
      }

      ::v-deep.el-tabs__header {
        margin-bottom: 0px !important;
      }


      ::v-deep .el-tabs__active-bar {
        display: none;
      }
    }

    &-right {
      &_title {
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        //   text-align: center;
        word-break: break-word;
        margin-bottom: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      &_des {
        font-size: 14px;
        line-height: 18px;
        text-indent: 28px;
        color: rgb(179, 179, 179);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        span {
          color: rgba(0, 153, 255, 0.801);
          cursor: pointer;
        }
      }
    }

    &-list {
      list-style-type: square;

      li {

        list-style-position: outside;
        // line-height: 20px;
        // border-radius: 50%;
        // color: gray;
        font-size: 16px;

        span {
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
          white-space: nowrap;
        }

      }

      // line-height: 14px;
      li::before {
        //使用伪类插入符号
        content: "●";
        font-size: 20px;
        color: gray;
        padding-right: 8px;
      }

    }

    &-coverImg {
      flex: 1;
      height: 130px;
      background-image: url('https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg');
      background-size: 100% 130px;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;

      span {
        display: block;
        margin-top: auto;
        font-size: 16px;
        line-height: 25px;
        height: 25px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }


  }

</style>
