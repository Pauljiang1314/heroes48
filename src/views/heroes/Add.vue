<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                //绑定文本框输入的数据
                formData: {
                    name: '',
                    gender: ''
                }
            };
        },
        methods: {
            handleAdd(){
                axios
                    .post('http://127.0.0.1:3001/heroes', this.formData)
                    .then((response) => {
                        if(response.status === 201){
                            //编程式导航
                            this.$router.push('/heroes');
                        }else {
                            alert('添加失败');
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                    })
            }
        }

    }
</script>

<style>

</style>

