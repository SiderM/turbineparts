<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="part in parts" :key="part.id + Date.now()">
      <th scope="row">{{part.id}}</th>
      <td>{{part.title}}</td>
      <td>{{part.price}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "Table",
        props: {
            parts: {
                type: Array
            }
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
    height: 70vh;
    position: absolute;
  }
</style>