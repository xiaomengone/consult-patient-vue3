
import { createApp } from 'vue'
import pinia from '@/stores'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import './styles/main.scss'
import { Button,Toast,NavBar   } from 'vant';

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Button);
app.use(NavBar);
app.use(Toast);
app.mount('#app')
