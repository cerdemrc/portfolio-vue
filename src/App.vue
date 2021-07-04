<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col xs="12" lg="3" xl="3" class="p-0">
          <Aside :mode="mode" @toggle="toggle" />
        </b-col>
        <b-col xs="12" lg="9" xl="9" class="app-page" :class="mode">
          <router-view :mode="mode" />
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
  data() {
    return {
      mode: "light",
    };
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
#app {
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.dark {
  background: $subDark;
}
.app-page {
  height: 100vh;
}

@media screen and(max-width:768px) {
  .app-page {
    height: auto;
  }
}
</style>
