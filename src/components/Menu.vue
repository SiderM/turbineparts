<template>
  <div>
    <router-link
            v-for="item in menuItems"
            :key="item.link + 1"
            :to="item.link"
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
                menuItems: [
                    {title: 'Крышка', link: 'cap'},
                    {title: 'Корпус', link: 'body'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>