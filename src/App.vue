<template>
  <div>
    <div>
      <Menu @link="getCat"/>
    </div>
    <List v-if="link != 'home'" :name="link" :key="link"/>
    <div v-else>dgdfg</div>
  </div>
</template>
<script>
    import Menu from "./components/Menu";
    import List from "./components/List";
    export default {
        components: {List, Menu},
        data() {
            return {
                link: 'home'
            }
        },
        methods: {
            getCat(name) {
                this.link = name
            }
        }
    }
</script>