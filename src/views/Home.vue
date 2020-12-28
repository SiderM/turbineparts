<template>
  <div>
    Home Page
    {{process.env.MONGO_URL}}
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>