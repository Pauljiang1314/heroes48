// 导入需要的包
import VueRouter from 'vue-router';
import Vue from 'vue';
//导入组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import HeroesAdd from '../views/heroes/add.vue';
import HeroesEdit from '../views/heroes/Edit.vue';

//注册VueRouter插件
Vue.use((VueRouter));

//创建路由对象
var router = new VueRouter({
    linkActiveClass: 'active',
    //路由规则
    routes: [
        {path: '/', redirect: '/heroes'},
        {name: 'heroes', path: '/heroes', component: HeroesList},
        {name: 'heroadd', path: '/heroes/add', component: HeroesAdd},
        { name: 'heroedit', path: '/heroes/:id', component: HeroesEdit, props:true},
        {name: 'equips', path: '/equips', component: EquipsList},
        {name: 'weapons', path: '/weapons', component: WeaponsList},
        
    ]
});

//模块中导出路由对象
export default router;