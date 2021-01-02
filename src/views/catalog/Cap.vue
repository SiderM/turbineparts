<template>
  <div>
    <input type="text" v-model="searchQuery">
    <Table :parts="filteredParts"/>
  </div>
</template>

<script>
    import Table from "@/components/Table";
    export default {
        name: "Body",
        components: {Table},
        data() {
            return {
                parts: [],
                searchQuery: ''
            }
        },
        computed: {
            filteredParts() {
                return this.parts.filter(part => part.title.includes(this.searchQuery.toLowerCase()))
            }
        },
        created() {
            let uri = `${process.env.BASE_URL}parts/${this.$route.name}.json`
            this.axios.get(uri).then(response => this.parts = response.data)
        }
    }
</script>

<style scoped>

</style>