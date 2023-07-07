<template>
  <div class="swiper">
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :span="2">
        <div class="swiper-left">
          专题策划
        </div>
      </el-col>
      <el-col :span="22">
        <div id="father" class="grid-content bg-purple">
          <div id="swiper-box" class="swiper-box" :style="{ transform: 'translateX(' + currentOffset + 'px)' }">
            <div v-for="(item, index) in list" :key="index">
              <div class="card-item" :style="{ minWidth: width }">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                  <div style="padding: 14px">
                  </div>
                </el-card>
              </div>
            </div>
          </div>
          <i class="el-icon-arrow-left" @click="left"></i>
          <i class="el-icon-arrow-right" @click="right"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'swiper',
    props: {
      width: {
        type: String,
        default: "20%",
      },
      list: {
        type: Array,
        default: () => {
          return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        },
      },
    },
    data() {
      return {
        currentDate: new Date(),
        currentOffset: 0,
        fatherWith: 0,
        box: '' // dom
      };
    },
    mounted() {
      this.setCardWidth()
      this.box = document.querySelector('#swiper-box')
      window.addEventListener('resize', () => {
        this.currentOffset = 0
        this.setCardWidth()
      })
    },
    methods: {
      setCardWidth() {
        const father = document.querySelector("#father");
        this.fatherWith = father.clientWidth;
        console.log("fatherWidth", this.fatherWith);
        this.width = (this.fatherWith - 20) / 5 + "px";
      },

      right() {
        console.log(this.currentOffset);
        if (this.currentOffset <= (-(this.fatherWith - 20) / 5) * (this.list.length - 5))
          return;
        this.currentOffset -= (this.fatherWith - 20) / 5;
      },
      left() {
        console.log(this.currentOffset);
        if (this.currentOffset >= -2) return;
        this.currentOffset += (this.fatherWith - 20) / 5;
      },
    },
  };

</script>

<style lang="scss" scoped>
  .card-item {
    padding: 10px;
    box-sizing: border-box;
  }

  .time {
    font-size: 13px;
    // color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 70px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

  .bg-purple {
    overflow: hidden;
    position: relative;
    padding-left: 10px;
  }

  .swiper {
    width: 100%;
    margin-top: 50px;

    &-left {
      width: 100%;
      height: 170px;
      word-wrap: break-word;
      /*英文的时候需要加上这句，自动换行*/
      writing-mode: vertical-rl;
      /*从左向右 从右向左是 writing-mode: vertical-rl;*/
      writing-mode: tb-rl;
      /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
      text-align: center;
      padding: 0px;
      display: flex;
      -webkit-display: flex;
      flex-direction: column;
      /* align-content: center; */
      /* vertical-align: middle; */
      justify-content: center;
      align-items: center;
      background-color: rgba(40, 140, 255, 0.911);
      color: #fff;
      font-weight: 600;
      font-size: 25px;

    }

    .swiper-box {
      display: flex;
      width: auto;
      transition: all 0.2s;
    }
  }

  [class^="el-icon-arrow-"] {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    padding: 10px 0;
    // background-color: #999;
    cursor: pointer;
  }

  .el-icon-arrow-left {
    left: -7px;
  }

  .el-icon-arrow-right {
    right: -7px;
  }

  .el-col {
    // padding: 0 !important;
  }

</style>
