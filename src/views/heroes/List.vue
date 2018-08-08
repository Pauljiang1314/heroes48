<template>
    <div>
        <h2 class="sub-header">英雄管理</h2>
          <!-- <a class="btn btn-success" href="{{heroadd}}">添加</a>
           -->
          <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="item.id">
                  <td>{{index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <!-- <router-link :to="'/heroes/' + item.id">edit</router-link> -->
                    <router-link :to="`/heroes/${item.id}`">edit</router-link>
                    &nbsp;&nbsp;
                   <a @click.prevent="handleDelete(item.id)" href="javascript:void(0)">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div> 
</template>

<script>
// 导入axios模块
import axios from 'axios';

export default {
  //组件中的data需要是方法，发送异步请求，把异步请求的结果，
  //赋值给List
    data() {
      return {
        list: []
      };
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData(){
        //在钩子函数中发送ajax异步请求
        axios
          .get('http://127.0.0.1:3001/heroes')
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              this.list = response.data;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleDelete(id){
        if(!confirm('是否要删除数据')){
          return;
        }
        axios
          .delete(`http://127.0.0.1:3001/heroes/${id}`)
          .then((response) => {
            if(response.status === 200) {
              this.loadData();
            }else {
              alert('删除失败');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

};
</script>

<style>

</style>

