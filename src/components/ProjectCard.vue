<script>
export default{
    data() {
        return{
            
        }
    },
    props: [
        'project'
    ],
}
</script>

<template>
    <h1>{{ project.title }}</h1>
    <img :src="project.image" alt="">
    <p :style="{ backgroundColor: project.type.color }">{{ project.type.name }}</p>
    <ul>
        <li v-for="tech in project.technologies">
            {{ tech.name }}
        </li>
    </ul>
</template>

<style lang="scss">
p{
    display: flex;
    width: fit-content;
    padding: .5rem;
    border-radius: 8px;
}

ul {
    display: flex;
    flex-direction: row;
    li{
        list-style-type: none;
        margin-right: .5rem;
    }
}

</style>