<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">№ Детлаи</th>
      <th scope="col" colspan="3">Наименование</th>
      <th scope="col">Цена (USD)</th>
      <th scope="col">Цена (курс ЦБ)</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="part in filteredParts" :key="part._id.$oid">
      <th scope="row" v-if="part.id !== null">{{part.id}}</th>
      <th scope="row" v-else>Нет номера</th>
      <td colspan="3">{{part.title}}</td>
      <td v-if="part.price !== null">{{part.price}} $</td>
      <td v-else>Нет цены</td>
      <td v-if="part.price !== null">{{parseInt(Number(part.price) / usd)}} руб.</td>
      <td v-else>Нет цены</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "Table",
        props: {
            category: {
                type: String
            },
            searchQuery: {
                type: String
            }
        },
        data() {
            return {
                parts: [],
                usd: Number
            }

        },
        computed: {
            filteredParts() {
                return this.parts.filter(part => part.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        methods: {
            getUSD() {
                this.axios.get('https://www.cbr-xml-daily.ru/latest.js').then(response => this.usd = response.data.rates.USD)
            }

        },
        created() {
            this.getUSD()
        },
        mounted() {
            this.axios.get(`${process.env.BASE_URL}parts/${this.category}.json`).then(response => this.parts = response.data)
        }
    }
</script>

<style scoped>
  tr {
    width: 100%;
    display: inline-table;
    table-layout: fixed;
  }

  tbody {
    overflow-y: scroll;
    height: 75vh;
    position: absolute;
  }
</style>