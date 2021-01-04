<template>
  <div>
    <div class="row">
      <div class="col-2">
        <h5>Поиск детали:</h5>
      </div>
      <div class="col-8">
        <input type="text" class="form-control" placeholder="Модель турбины или размеры..." v-model="searchQuery">
      </div>
      <div class="col-2">
        <CatalogeModal :instruction="$route.params.name"/>
      </div>
    </div>
    <CatalogeTable :category="$route.params.name" :search-query="searchQuery" :key="$route.params.name"/>
  </div>
</template>

<script>
    import CatalogeTable from '../components/CatalogeTable';
    import CatalogeModal from "../components/CatalogeModal";

    export default {
        name: "Parts",
        components: {CatalogeModal, CatalogeTable},
        data() {
            return {
                searchQuery: ''
            }
        }
    }
</script>

<style scoped>

</style>