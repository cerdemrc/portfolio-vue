<template>
  <div class="app">
    <div class="app-aside"><Aside :mode="mode" @toggle="toggle" /></div>
    <div class="app-pages" :class="mode"><router-view :mode="mode" /></div>
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dark {
  background: $subDark;
}

.app {
  display: flex;
  & .app-aside {
    width: 20%;
    background: $primary;
    position: fixed;
    top: 0;
    left: 0;
  }
  & .app-pages {
    width: 80%;
    position: absolute;
    right: 0;
    //overflow-y: scroll;
  }
}

@media screen and(max-width:1200px) {
  .app {
    & .app-aside {
      width: 30%;
    }
    & .app-pages {
      width: 70%;
    }
  }
}

@media screen and(max-width:1020px) {
  .app {
    flex-direction: column;
    & .app-aside {
      position: relative;
      width: 100%;
      height: auto;
    }
    & .app-pages {
      width: 100%;
      position: relative;
    }
  }
}
</style>
