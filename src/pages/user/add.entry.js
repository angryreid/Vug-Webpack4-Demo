// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。
import Vue 		from 'vue';
import vugPage 	 from './add.vue';

new Vue({
	el: '#app',
	components: {
		vugPage,
	},
	mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
})