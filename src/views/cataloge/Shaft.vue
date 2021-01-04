<template>
  <div>
    <div class="row">
      <div class="col-2">
        <h5>Поиск корпуса:</h5>
      </div>
      <div class="col-9">
        <input type="text" class="form-control" placeholder="Модель турбины..." v-model="searchQuery">
      </div>
      <div class="col-1">
        <CatalogeButton :instruction="$route.name"/>
      </div>
    </div>
    <CatalogeTable :category="$route.name" :search-query="searchQuery"/>
  </div>
</template>

<script>
    import CatalogeTable from '@/components/CatalogeTable';
    import CatalogeButton from "../../components/CatalogeButton";

    export default {
        name: "Shaft",
        components: {CatalogeTable, CatalogeButton},
        data() {
            return {
                searchQuery: ''
            }
        }
    }
</script>

<style scoped>

</style>