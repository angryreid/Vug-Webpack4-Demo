<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      msg: "This is Vug"
    };
	},
	created(){
		console.log(this)
	}
};
</script>