<template>
  <div>
    <h3 v-show="show">Welcome</h3>
    <p>{{msg}}</p>
    <a href="#" @click="showHi">click</a>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
import Vue from "vue";
import { Toast } from "mint-ui";
import "mint-ui/lib/style.css";

export default {
  data() {
    return {
      msg: "This is Vug",
      show: true
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    showHi() {
      // this.show = !this.show;
      Toast({
        message: "请登录",
        duration: 3000,
        position: "bottom"
      });
    }
  }
};
</script>