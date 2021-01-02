<template>
  <div>
    <input type="text" v-model="searchQuery">
    <div v-if="isLoading">Load...</div>
    <Table v-else :parts="filteredParts"/>
  </div>
</template>

<script>
    import Table from "@/components/Table";
    export default {
        name: "List",
        components: {Table},
        props: {
            name: {
                type: String
            }
        },
        data() {
            return {
                parts: [],
                searchQuery: ''
            }
        },
        computed: {
            filteredParts() {
                return this.parts.filter(part => part.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },

        mounted() {
            let uri = `${process.env.BASE_URL}parts/${this.name}.json`
            this.axios.get(uri).then(response => this.parts = response.data)
        }
    }
</script>

<style scoped>

</style>