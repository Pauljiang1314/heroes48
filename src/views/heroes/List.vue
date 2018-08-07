<template>
    <a @click.prevent></a>
</template>

<script>
    import axios from 'axios';  
    export default {
        data() {
            return {
                list: []
            };
        },
        created(){
            
        },
        methods: {
            handleDelete(id) {
                axios
                    .delete(`http://127.0.0.1:3001heros/${id}`)
                    .then((response) => {
                        if( ) { }
                    });
            }
        }
    }
</script>

