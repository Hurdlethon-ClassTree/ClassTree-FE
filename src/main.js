import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const app = createApp(App);

// Vuex와 Vue Router 등록
app.use(store).use(router).mount("#app");

