// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。
import Vue from "vue";
import VueRouter from "vue-router";
import VugPage from "./add.vue";

const isProd = process.env.NODE_ENV === "production";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: isProd ? "hash" : "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: VugPage
    }
  ]
});

new Vue({
	el: "#app",
	router,
	mounted() {
		document.dispatchEvent(new Event('render-event'))
	}
});
