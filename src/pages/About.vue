<template>
  <div class="about-page">
    <div class="about">
      <div class="about-content">
        <h2>Ceren Demirci</h2>
        <h6>Jr. Frontend Developer</h6>
        <p>
          I graduated from computer engineering in June 2020. I'm on my way to
          becoming a good Developer. But for now I am a jr front end developer
          with a passion for lifelong learning. I'm currently learning Nuxt JS
          and doing projects. When I’m not coding, I enjoy learning new
          technologies, playing computer games and solving sudoku.
          <br /><br />
          If you can dream it, you can do it.
        </p>
      </div>
      <img class="about-image" src="../assets/work.jpeg" />
    </div>
    <div class="technology">
      <div class="technology-title">
        <div class="technology-line" />
        <h3>Technologies I Use</h3>
      </div>
      <div class="technology-content">
        <b-container>
          <b-row>
            <b-col xs="12" sm="12" md="6" lg="3">
              <div class="technology-content-card">
                <img src="../assets/svg/html.svg" class="mr-2" />
                <img src="../assets/svg/css.svg" class="mr-2" />
                <img src="../assets/svg/sass.svg" />
                <h5>HTML & CSS & SASS</h5>
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="3">
              <div class="technology-content-card">
                <img src="../assets/svg/js.svg" />
                <h5>JavaScript</h5>
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="3">
              <div class="technology-content-card">
                <img src="../assets/svg/vue.svg" />
                <h5>Vue JS</h5>
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="3">
              <div class="technology-content-card">
                <img src="../assets/svg/npm.svg" class="mr-2 mt-2" />
                <img src="../assets/svg/gulp.svg" />
                <h5>npm, Gulp</h5>
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about-page {
  & .about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding: 15px;
    background: rgba(238, 237, 237, 0.459);
    &-content {
      margin-top: 30px;
      & h2 {
        font-size: 39px;
        line-height: 47px;
        font-weight: 700;
        font-weight: bold;
      }
      & h6 {
        font-size: 24px;
        line-height: 36px;
        font-weight: 300;
      }
      & p {
        margin-top: 20px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        width: 95%;
      }
    }
    &-image {
      width: 400px;
      height: auto;
      border-radius: 0 40% 0 40%;
    }
  }
  & .technology {
    &-title {
      display: flex;
      align-items: flex-start;
      margin-top: 50px;
      & .technology-line {
        width: 4px;
        height: 35px;
        margin-right: 12px;
        background: #54b689;
      }
      & h3 {
        font-size: 28px;
        line-height: 38px;
        font-weight: 700;
      }
    }
    &-content {
      margin-top: 30px;
      &-card {
        width: 80%;
        & h5 {
          font-size: 15px;
          font-weight: bold;
          margin-top: 10px;
        }
        & p {
          font-size: 13px;
        }
      }
    }
  }
}

@media screen and(max-width:768px) {
  .about-page {
    & .about {
      margin-top: 0;
      &-content {
        margin-right: 10px;
        & h2 {
          font-size: 30px;
        }
        & h6 {
          font-size: 15px;
        }
        & p {
          font-size: 14px;
        }
      }
      &-image {
        width: 320px;
        height: auto;
        border-radius: 0 40% 0 40%;
      }
    }
    & .technology {
      &-title {
        display: flex;
        align-items: flex-start;
        margin-top: 50px;
        & .technology-line {
          width: 4px;
          height: 35px;
          margin-right: 12px;
          background: #54b689;
        }
        & h5 {
          font-size: 28px;
          font-weight: bold;
        }
      }
      &-content {
        margin-top: 30px;
        &-card {
          width: 80%;
          & h5 {
            font-size: 15px;
            font-weight: bold;
            margin-top: 10px;
          }
          & p {
            font-size: 13px;
          }
        }
      }
    }
  }
}

@media screen and(max-width:415px) {
  .about-page {
    & .about {
      flex-direction: column;
      &-content {
        & h2 {
          font-size: 30px;
        }
        & h6 {
          text-align: center;
          font-size: 16px;
        }
      }
      &-image {
        width: 320px;
      }
    }
    & .technology {
      &-title {
      }
      &-content {
        margin-top: 30px;
        &-card {
          width: 80%;
          & h5 {
            font-size: 15px;
            font-weight: bold;
            margin-top: 10px;
          }
          & p {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>