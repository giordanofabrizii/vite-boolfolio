<script>
import axios from 'axios';

export default{
    data() {
        return{
            technologies : [],
        }
    },
    methods: {
        getTechnologies() {
            axios.get('http://127.0.0.1:8000/api/technologies', {
                params: {
                    nome: '',
                }
            })
                .then((response) => {
                    this.technologies = (response.data.results)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
    },
    mounted(){
        this.getTechnologies();
    }
}
</script>

<template>
    <ul>
        <li v-for="tech in technologies">
            {{ tech.name }}
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    display: block;
    margin-left: 2rem;
    li{
        list-style-type: disc;
    }
}
</style>