<template>
  <div>
    <input type="text" v-model="squery">
    <Table :parts="filteredParts"/>
  </div>
</template>

<script>
    import Table from "../components/Table";
    export default {
        name: "Body",
        components: {Table},
        data() {
            return {
                parts: [],
                squery: ''
            }
        },
        computed: {
            filteredParts() {
                return this.parts.filter(part => part.title.includes(this.squery))
            }
        },
        created() {
            let uri = process.env.BASE_URL + 'parts/body.json';
            this.axios.get(uri).then(response => {
                this.parts = response.data;
            });
        }
    }
</script>

<style scoped>

</style>