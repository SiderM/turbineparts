<template>
  <div class="list-group">
    <router-link
            class="list-group-item list-group-item-action"
            v-for="item in menuItems" :key="item.link + 1"
            :to="`/${item.link}`"
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
                menuItems: [
                    {title: 'Вал', link: 'shaft'},
                    {title: 'Втулка', link: 'sleeve'},
                    {title: 'Гайка', link: 'nut'},
                    {title: 'Геометрия', link: 'geometry'},
                    {title: 'Зажим', link: 'clamp'},
                    {title: 'Картридж', link: 'cartridge'},
                    {title: 'Катушка', link: 'coil'},
                    {title: 'Колесо', link: 'wheel'},
                    {title: 'Кольцо', link: 'ring'},
                    {title: 'Кольцо резиновое', link: 'ringrubber'},
                    {title: 'Комплект прокладок', link: 'gasketset'},
                    {title: 'Корпус', link: 'body'},
                    {title: 'Крышка', link: 'cap'},
                    {title: 'Прокладка', link: 'gasket'},
                    {title: 'Протектор', link: 'tread'},
                    {title: 'Рем. комплект', link: 'kit'},
                    {title: 'Улитка', link: 'snail'},
                    {title: 'Упорный подшипник', link: 'thrustbearing'},
                    {title: 'Фиксатор', link: 'retainer'},
                    {title: 'Шайба', link: 'washer'},
                    {title: 'Экран', link: 'screen'}
                ]
            }
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