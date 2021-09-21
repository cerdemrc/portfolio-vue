<template>
  <div>
    <div class="aside" :class="mode">
      <h5 class="aside-name">&lt; Ceren Demirci &#47;&gt;</h5>
      <img class="aside-image" src="../assets/picture.jpeg" />
      <p class="aside-bio">Frontend Developer</p>
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
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="23"
              height="23"
              viewBox="0 0 226 226"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g fill="#ffffff">
                  <path
                    d="M180.8,30.13333h-135.6c-8.32433,0 -15.06667,6.74233 -15.06667,15.06667v135.6c0,8.32433 6.74233,15.06667 15.06667,15.06667h135.6c8.32433,0 15.06667,-6.74233 15.06667,-15.06667v-135.6c0,-8.32433 -6.74233,-15.06667 -15.06667,-15.06667zM158.2,128.06667h-90.4c-4.1584,0 -7.53333,-3.37493 -7.53333,-7.53333c0,-4.1584 3.37493,-7.53333 7.53333,-7.53333h90.4c4.1584,0 7.53333,3.37493 7.53333,7.53333c0,4.1584 -3.37493,7.53333 -7.53333,7.53333zM75.33333,90.4c0,-4.1584 3.37493,-7.53333 7.53333,-7.53333h60.26667c4.1584,0 7.53333,3.37493 7.53333,7.53333c0,4.1584 -3.37493,7.53333 -7.53333,7.53333h-60.26667c-4.1584,0 -7.53333,-3.37493 -7.53333,-7.53333zM158.2,67.8h-90.4c-4.1584,0 -7.53333,-3.37493 -7.53333,-7.53333c0,-4.1584 3.37493,-7.53333 7.53333,-7.53333h90.4c4.1584,0 7.53333,3.37493 7.53333,7.53333c0,4.1584 -3.37493,7.53333 -7.53333,7.53333z"
                  ></path>
                </g>
              </g>
            </svg>
            <router-link to="/blog" tag="a">Blog</router-link>
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
          <p class="aside-bio">Frontend Developer</p>
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
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="23"
                  height="23"
                  viewBox="0 0 226 226"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,226v-226h226v226z" fill="none"></path>
                    <g fill="#ffffff">
                      <path
                        d="M180.8,30.13333h-135.6c-8.32433,0 -15.06667,6.74233 -15.06667,15.06667v135.6c0,8.32433 6.74233,15.06667 15.06667,15.06667h135.6c8.32433,0 15.06667,-6.74233 15.06667,-15.06667v-135.6c0,-8.32433 -6.74233,-15.06667 -15.06667,-15.06667zM158.2,128.06667h-90.4c-4.1584,0 -7.53333,-3.37493 -7.53333,-7.53333c0,-4.1584 3.37493,-7.53333 7.53333,-7.53333h90.4c4.1584,0 7.53333,3.37493 7.53333,7.53333c0,4.1584 -3.37493,7.53333 -7.53333,7.53333zM75.33333,90.4c0,-4.1584 3.37493,-7.53333 7.53333,-7.53333h60.26667c4.1584,0 7.53333,3.37493 7.53333,7.53333c0,4.1584 -3.37493,7.53333 -7.53333,7.53333h-60.26667c-4.1584,0 -7.53333,-3.37493 -7.53333,-7.53333zM158.2,67.8h-90.4c-4.1584,0 -7.53333,-3.37493 -7.53333,-7.53333c0,-4.1584 3.37493,-7.53333 7.53333,-7.53333h90.4c4.1584,0 7.53333,3.37493 7.53333,7.53333c0,4.1584 -3.37493,7.53333 -7.53333,7.53333z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <router-link to="/blog" tag="a">Blog</router-link>
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
