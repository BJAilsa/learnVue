//查找路径是node_modules下面的vue
import Vue from 'vue';
import App from './APP.vue';

new Vue({
    el: '#app',
    render: c => c(App)
})