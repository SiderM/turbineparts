<template>
  <div>
    <div>
      <Menu/>
    </div>
    <router-view/>
  </div>
</template>
<script>
    import Menu from "./components/Menu";
    export default {
        components: {Menu}
    }
</script>