<template>
  <div>
    <div>Instructions Page</div>
    <div>{{usd}}</div>
  </div>
</template>

<script>
    export default {
        name: "Instructions",
        data() {
            return {
                usd: Number
            }
        },
        methods: {
            getUSD() {
                this.axios.get('https://www.cbr-xml-daily.ru/latest.js').then(response => this.usd = response.data.rates.USD)
            }

        },
        mounted() {
            this.getUSD()
        }
    }
</script>

<style scoped>

</style>