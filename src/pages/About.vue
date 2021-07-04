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
            <img class="technology-content-icon" src="../assets/svg/html.svg" />
            <img class="technology-content-icon" src="../assets/svg/css.svg" />
            <img class="technology-content-icon" src="../assets/svg/sass.svg" />
            <img class="technology-content-icon" src="../assets/svg/js.svg" />
            <img class="technology-content-icon" src="../assets/svg/vue.svg" />
            <img
              class="technology-content-icon"
              src="../assets/svg/vscode.svg"
            />
            <img
              class="technology-content-icon"
              src="../assets/svg/figma.svg"
            />
            <img
              class="technology-content-icon"
              src="../assets/svg/bootstrap.svg"
            />
            <img
              class="technology-content-icon mb-2"
              src="../assets/svg/gulp.svg"
            />
            <img
              class="technology-content-icon mt-2"
              src="../assets/svg/npm.svg"
            />
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["mode"],
};
</script>

<style lang="scss" scoped>
//general css
.about-page {
  padding: 0 20px;
  height: 100vh;
  & .about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding: 15px;
    background: rgba(202, 202, 202, 0.199);
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
      &-icon {
        margin: 0 8px;
        width: 30px;
        height: auto;
        &:nth-child(7) {
          width: 40px;
        }
        &:nth-child(9) {
          width: 25px;
        }
        &:last-child {
          width: 40px;
        }
      }
    }
  }
}

//light theme
.light {
  & .about {
    background: rgba(238, 237, 237, 0.459);
    &-content {
      & h2,
      h6,
      p {
        color: #000;
      }
    }
  }
  & .technology {
    &-title {
      & h3 {
        color: #000;
      }
    }
    &-content {
      &-card {
        & h5,
        p {
          color: #000;
        }
      }
    }
  }
}

//dark theme
.dark {
  & .about {
    background: rgba(238, 237, 237, 0.11);
    &-content {
      & h2,
      h6,
      p {
        color: #fff;
      }
    }
  }
  & .technology {
    &-title h3 {
      color: #fff;
    }
    &-content {
      &-card {
        & h5,
        p {
          color: #fff;
        }
      }
    }
  }
}
@media screen and(max-width:1500px) {
  .about-page {
    padding: 0;
    margin-bottom: 250px;
    & .about {
      margin-top: 0;
    }
  }
}

@media screen and(max-width:768px) {
  .about-page {
    & .about {
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
        width: 50%;
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
      }
    }
  }
}

@media screen and(max-width:415px) {
  .about-page {
    & .about {
      flex-direction: column;
      &-content {
        margin-top: 0;
        & h2 {
          font-size: 30px;
        }
        & h6 {
          font-size: 16px;
        }
      }
      &-image {
        width: 100%;
      }
    }
    & .technology {
      &-content {
        margin-top: 30px;
        &-icon {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>