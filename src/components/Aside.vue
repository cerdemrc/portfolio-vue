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
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.aside {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 385px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &-name {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 20px;
  }
  &-image {
    width: 180px;
    height: auto;
    border-radius: 50%;
    margin: 20px 0;
  }
  &-bio {
    color: #fff;
  }
  &-links {
    margin-top: 20px;
    & img {
      background: #fff;
      border-radius: 50%;
      padding: 5px 6px;
      margin-left: 8px;
      &:hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
  &-line {
    margin-top: 30px;
    width: 320px;
    height: 1px;
    background: rgba(0, 0, 0, 0.158);
  }
  &-pages {
    margin-top: 20px;
    & ul {
      list-style-type: none;
      & li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 10px 0;
        & img {
          width: 15px;
          height: auto;
          margin-right: 5px;
        }
        & a {
          color: #fff;
          letter-spacing: 1px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          text-decoration: none;
          &:hover {
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  &-dark-mode {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 40px;
    & img {
      width: 15px;
      height: auto;
      margin-right: 5px;
      margin-top: 2px;
    }
    & h5 {
      font-size: 14px;
      line-height: 17px;
      font-weight: 700;
      color: #fff;
    }
  }
  &-mobile {
    display: none;
  }
}

.dark {
  background: $secondary;
}
.light {
  background: $primary;
}
@media screen and(max-width:1500px) {
  .aside {
    width: 300px;
  }
}
@media screen and(max-width:991px) {
  .aside {
    display: none;
    &-mobile {
      display: block;
      &-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & img {
          width: 25px;
          height: auto;
          border: 1px solid #fff;
          border-radius: 20%;
          padding: 5px;
          margin: 10px;
        }
        &-name {
          color: #fff;
          margin: 5px;
          font-size: 20px;
          line-height: 47px;
          letter-spacing: 1.5px;
          font-weight: 700;
          font-weight: bold;
        }
        &-empty {
          width: 25px;
          margin: 10px;
        }
      }
      &-hidden {
        &-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
        }
      }
    }
    &-line {
      margin-top: 15px;
      width: 700px;
      height: 0.5px;
    }
    &-dark-mode {
      margin-top: 20px;
      &-checkbox {
        padding-bottom: 20px;
      }
    }
  }
}
</style>