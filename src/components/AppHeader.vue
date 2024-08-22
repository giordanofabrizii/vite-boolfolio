<script>
export default{
    data() {
        return{
            headerLinks : [
                {
                    'name': 'home',
                    'label': 'home'
                },
                {
                    'name': 'projects',
                    'label': 'projects'
                },
                {
                    'name': 'technologies',
                    'label': 'technologies',
                }
            ],
        }
    }
}
</script>

<template>
    <h1>Vite Boolfolio</h1>
    <ul>
        <li v-for="(link, index) in headerLinks" :key="index">
            <router-link :to="{ name:link.name }">
                {{ link.label }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped>

</style>