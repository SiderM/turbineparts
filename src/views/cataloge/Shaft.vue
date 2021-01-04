<template>
  <div>
    <div class="row">
      <div class="col">
        <h5>Наименование:</h5>
      </div>
      <div class="col">
        <input class="form-control form-control-sm" type="text" placeholder="Модель..." v-model="model">
      </div>
      <div class="col">
        <h5>Размеры:</h5>
      </div>
      <div class="col">
        <input class="form-control form-control-sm" placeholder="1 размер" type="text" v-model="firstParam">
      </div>
      <div class="col">
        <input class="form-control form-control-sm" placeholder="2 размер" type="text" v-model="secondParam">
      </div>
      <div class="col">
        <input class="form-control form-control-sm" placeholder="3 размер" type="text" v-model="thirdParam">
      </div>
      <div class="col">
        <input class="form-control form-control-sm" placeholder="4 размер" type="text" v-model="fourthParam">
      </div>
      <div class="col">
        <input class="form-control form-control-sm" placeholder="5 размер" type="text" v-model="fifthParam">
      </div>
      <div class="col">
        <input class="form-control form-control-sm" placeholder="кол. лопастей" type="text" v-model="blades">
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
                model: '',
                firstParam: '',
                secondParam: '',
                thirdParam: '',
                fourthParam: '',
                fifthParam: '',
                blades: ''
            }
        },
        computed: {
            searchQuery() {
                if(this.firstParam !== '') {
                    return `${this.firstParam}/${this.secondParam}/${this.thirdParam}/${this.fourthParam}/${this.fifthParam}/${this.blades}`
                }
                return this.model
            }
        }
    }
</script>

<style scoped>

</style>