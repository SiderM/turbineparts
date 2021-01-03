<template>
  <div class="container-fluid">
    <AppHeader/>
    <div class="row mt-3">
      <div class="col-3">
        <CatalogeMenu/>
      </div>
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
    import CatalogeMenu from "./components/CatalogeMenu";
    import AppHeader from "./components/AppHeader";
    export default {
        components: {AppHeader, CatalogeMenu}
    }
</script>