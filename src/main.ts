
import { createApp } from 'vue'
import pinia from '@/stores'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import './styles/main.scss'
import {
    Button, Toast, NavBar, Form,
    Field, CellGroup, Checkbox, Tabbar, TabbarItem,
    Col, Row, Image as VanImage,Icon ,Cell, CellGroup,Dialog
} from 'vant';

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Button);
app.use(NavBar);
app.use(Toast);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Checkbox);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Col);
app.use(Row);
app.use(VanImage);
app.use(Icon);
app.use(Cell);
app.use(CellGroup);
app.use(Dialog);
app.mount('#app')
