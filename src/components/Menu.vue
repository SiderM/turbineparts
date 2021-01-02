<template>
  <div>
    <button
            v-for="item in menuItems"
            :key="item.link + 1"
            @click="$emit('link', item.link)"
    >
      {{item.title}}
    </button>
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
                    {title: 'Корпус', link: 'clamp'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>