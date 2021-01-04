<template>
  <div>
    <input type="text" v-model="searchQuery">
    <CatalogeTable :category="$route.name" :search-query="searchQuery"/>
  </div>
</template>

<script>
    import CatalogeTable from '@/components/CatalogeTable';
    export default {
        name: "Retainer",
        components: {CatalogeTable},
        data() {
            return {
                searchQuery: ''
            }
        }
    }
</script>

<style scoped>

</style>