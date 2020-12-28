<template>
  <div>
    Home Page
    {{process.env.MONGO_URL}}
    {{process.env.BASE_URL}}
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>