<template>
  <div>
    <div class="aside" :class="mode">
      <h5 class="aside-name">&lt; Ceren Demirci &#47;&gt;</h5>
      <img class="aside-image" src="../assets/picture.jpeg" />
      <p class="aside-bio">Jr. Frontend Developer</p>
      <div class="aside-links">
        <a href="https://github.com/cerdemrc" target="blank"
          ><img src="../assets/svg/github.svg"
        /></a>
        <a href="https://www.linkedin.com/in/cerendemirci/" target="blank"
          ><img src="../assets/svg/linkedin.svg"
        /></a>
        <a href="https://cerdemrc.medium.com/" target="blank"
          ><img src="../assets/svg/medium.svg"
        /></a>
        <a href="https://www.behance.net/cerendemirci" target="blank"
          ><img src="../assets/svg/behance.svg"
        /></a>
        <a
          href="https://stackoverflow.com/users/12705137/ceren?tab=profile"
          target="blank"
          ><img src="../assets/svg/stackoverflow.svg"
        /></a>
      </div>
      <div class="aside-line" />
      <div class="aside-pages">
        <ul>
          <li>
            <img src="../assets/svg/about.svg" /><router-link to="/" tag="a"
              >About</router-link
            >
          </li>
          <li>
            <img src="../assets/svg/portfolio.svg" />
            <router-link to="/portfolio" tag="a">Projects</router-link>
          </li>
          <li>
            <img src="../assets/svg/skills.svg" /><router-link
              to="/skills"
              tag="a"
              >Skills</router-link
            >
          </li>
        </ul>
      </div>
      <div class="aside-dark-mode">
        <img src="../assets/svg/darkmode.svg" />
        <h5>Dark Mode</h5>
      </div>
      <b-form-checkbox
        @change="$emit('toggle')"
        switch
        size="lg"
      ></b-form-checkbox>
    </div>
    <div class="aside-mobile" :class="mode">
      <div class="aside-mobile-icon">
        <img src="../assets/svg/hamburger-menu.svg" @click="showMenu" />
        <h5 class="aside-mobile-icon-name">Elif Ceren Demirci</h5>
        <div class="aside-mobile-icon-empty" />
      </div>
      <div class="aside-mobile-hidden" v-if="isShowMenu">
        <div class="aside-mobile-hidden-content">
          <img class="aside-image" src="../assets/picture.jpeg" />
          <p class="aside-bio">Jr. Frontend Developer</p>
          <div class="aside-links">
            <a href="https://github.com/cerdemrc" target="blank"
              ><img src="../assets/svg/github.svg"
            /></a>
            <a href="https://www.linkedin.com/in/cerendemirci/" target="blank"
              ><img src="../assets/svg/linkedin.svg"
            /></a>
            <a href="https://cerdemrc.medium.com/" target="blank"
              ><img src="../assets/svg/medium.svg"
            /></a>
            <a href="https://www.behance.net/cerendemirci" target="blank"
              ><img src="../assets/svg/behance.svg"
            /></a>
            <a
              href="https://stackoverflow.com/users/12705137/ceren?tab=profile"
              target="blank"
              ><img src="../assets/svg/stackoverflow.svg"
            /></a>
          </div>
          <div class="aside-pages">
            <ul>
              <li>
                <img src="../assets/svg/about.svg" /><router-link to="/" tag="a"
                  >About</router-link
                >
              </li>
              <li>
                <img src="../assets/svg/portfolio.svg" /><router-link
                  to="/portfolio"
                  tag="a"
                  >Portfolio</router-link
                >
              </li>
              <li>
                <img src="../assets/svg/skills.svg" /><router-link
                  to="/skills"
                  tag="a"
                  >Skills</router-link
                >
              </li>
            </ul>
          </div>
          <div class="aside-line" />
          <div class="aside-dark-mode">
            <img src="../assets/svg/darkmode.svg" />
            <h5>Dark Mode</h5>
          </div>
          <b-form-checkbox
            class="aside-dark-mode-checkbox"
            @change="$emit('toggle')"
            switch
            size="lg"
          ></b-form-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: ["mode"],
  data() {
    return {
      isShowMenu: false,
    };
  },
  watch: {
    $route() {
      this.isShowMenu = false;
    },
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/aside.scss";
</style>