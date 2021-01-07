<template>
  <div>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="constr" />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell is-link title="基础用法" @click="vshow = true" />
    <van-action-sheet v-model="vshow" :actions="actions" @select="onSelect" />
    <van-button type="primary" @click="sst">打印信息</van-button>
    <van-button type="primary" @click="imgsst">查看图片</van-button>
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        {{ index }}
      </van-swipe-item>
    </van-swipe>
    <van-image-preview v-model="imgshow" :images="images"> </van-image-preview>
    <van-dialog
      v-model="myshow"
      title="打印信息"
      show-cancel-button
      message="点击打印‘LBWNB’"
      @confirm="confirm"
      @cancel="cancel"
    >
      <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog>
    <van-area
  title="城市"
  :area-list="citylist"
  :columns-placeholder="['请选择', '请选择', '请选择']"
/>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      myshow: false,
      show: false,
      vshow: false,
      imgshow: false,
      date: "",
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      citylist: {
        province_list: {
          100000: "江西省",
          110000: "广东省"
        },
        city_list: {
          100100: "赣州市",
          100200: "南昌市",
          110100: "东莞市",
          110200: "深圳市"
        },
        county_list: {
          110101: "虎门镇",
          110102: "东莞市",
          110205: "罗湖区",
          110206: "起点区",
          100101: "宁都县",
          100102: "于都县",
          100103: "高校区",
          100201: "高校区",
        }
      }
    };
  },
  methods: {
    constr(date) {
      console.log(date);
      this.show = false;
      this.date = `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onSelect(item) {
      this.vshow = false;
      console.log(item.name);
    },
    sst() {
      this.myshow = true;
    },
    confirm() {
      console.log("LbWNP");
    },
    cancel() {
      console.log("就算你点击了取消我也要打印LbWNP");
    },
    imgsst() {
      this.imgshow = true;
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
img {
  width: 30vw;
  height: 30vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
