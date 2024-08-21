<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default{
    data() {
        return{
            projects : [],
        }
    },
    components: {
        ProjectCard,
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects/', {
                params: {
                    nome: '',
                }
            })
                .then((response) => {
                    console.log(response.data.results.data)
                    this.projects = response.data.results.data;
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
        this.getProjects();
    }
}
</script>

<template>
    <ProjectCard v-for="project in projects" :project="project"/>
</template>

<style scoped>

</style>