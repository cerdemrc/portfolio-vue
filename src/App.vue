<template>
  <div id="app">
    <b-container fluid class="p-0">
      <b-row>
        <b-col xs="12" sm="12" lg="3">
          <Aside />
        </b-col>
        <b-col xs="12" sm="12" lg="9">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
export default {
  name: "App",
  components: {
    Aside,
  },
};
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
