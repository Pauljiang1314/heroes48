import VueRouter from 'vue-router';
import Vue from '../node_modules/vue';

//导入组件
import HeroesList from '../views/hreoes/List.vue';
import HeroesList from '../views/hreoes/List.vue';
import HeroesList from '../views/hreoes/List.vue';
//注册VueRouter插件 this.$router this.$route
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/heroes'},
        { name: 'heroes', path: '/heroes', component: HeroesList},
        { name: 'queips', path: '/queips', component: EquipsList},
        { name: 'weapons', path: '/weapons', component: WeaponsList}
    ]
});

export default router;