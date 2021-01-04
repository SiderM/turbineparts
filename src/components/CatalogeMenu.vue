<template>
  <div class="list-group">
    <router-link
            class="list-group-item list-group-item-action"
            v-for="item in menuItems" :key="item.link + 1"
            :to="`/cataloge/${item.link}`"
            active-class="active"
    >
      {{item.title}}
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                menuItems: []
            }
        },
        methods: {
            getMenu() {
                this.axios.get(`${process.env.BASE_URL}catalogeItems.json`).then(response => {
                    return this.menuItems = response.data
                })

            }
        },
        created() {
            this.getMenu()
        }
    }
</script>

<style scoped>
  .list-group {
    overflow-y: scroll;
    height: 85vh;
    position: relative;
  }

</style>