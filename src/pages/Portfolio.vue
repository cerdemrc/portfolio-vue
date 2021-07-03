<template>
  <div class="portfolio">
    <div class="projects">
      <b-container>
        <b-row>
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/makeup.png" />
              <h3 class="projects-card-title">Find Make-Up</h3>
              <a href="https://github.com/cerdemrc/makeup" target="_blank"
                >See Code</a
              >
              <a href="https://cerdemrc.github.io/makeup/" target="_blank"
                >Go To Project</a
              >
            </div>
          </b-col>
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/random-things.png" />
              <h3 class="projects-card-title">Random Things</h3>
              <a
                href="https://github.com/cerdemrc/random-things-react"
                target="_blank"
                >See Code</a
              >
              <a href="https://random-things-react.vercel.app/" target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/pixabay.png" />
              <h3 class="projects-card-title">Pixabay API</h3>
              <a href="https://github.com/cerdemrc/pixabay-api" target="_blank"
                >See Code</a
              >
              <a href="https://cerdemrc.github.io/pixabay-api/" target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/ideal-weight.png" />
              <h3 class="projects-card-title">Ideal Weight Calculator</h3>
              <a
                href="https://github.com/cerdemrc/ideal-weight-calculator"
                target="_blank"
                >See Code</a
              >
              <a
                href="https://cerdemrc.github.io/ideal-weight-calculator/"
                target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/quiz-app.png" />
              <h3 class="projects-card-title">Quiz App</h3>
              <a href="https://github.com/cerdemrc/quiz-app" target="_blank"
                >See Code</a
              >
              <a href="https://cerdemrc.github.io/quiz-app/" target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/currency.png" />
              <h3 class="projects-card-title">Currency Converter</h3>
              <a
                href="https://github.com/cerdemrc/currency-converter"
                target="_blank"
                >See Code</a
              >
              <a
                href="https://cerdemrc.github.io/currency-converter/"
                target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/rps.png" />
              <h3 class="projects-card-title">Rock Paper Scissors</h3>
              <a
                href="https://github.com/cerdemrc/vue-rock-paper-scissors"
                target="_blank"
                >See Code</a
              >
              <a
                href="https://vuejs-rock-paper-scissors.netlify.app/"
                target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/movie.png" />
              <h3 class="projects-card-title">Movie App</h3>
              <a href="https://github.com/cerdemrc/movie-app" target="_blank"
                >See Code</a
              >
              <a href="https://application-movie.netlify.app/" target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
          <b-col xs="12" sm="12" md="6" lg="4">
            <div class="projects-card">
              <img src="../assets/projects/instagram.png" />
              <h3 class="projects-card-title">Instagram Clone</h3>
              <a
                href="https://github.com/cerdemrc/instagram-clone"
                target="_blank"
                >See Code</a
              >
              <a
                href="https://instagram-clone-git-master-cerdemrc.vercel.app/"
                target="_blank"
                >Go To Project</a
              >
            </div></b-col
          >
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style lang="scss" scoped>
.portfolio {
  margin-top: 30px;
  margin-bottom: 30px;
  & .projects {
    margin-top: 30px;
    &-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      &-title {
        margin-top: 10px;
        font-size: 20px;
      }
      & a {
        text-decoration: none;
        color: #54b689;
        font-weight: 500;
        font-size: 15px;
        &:hover {
          color: rgba(0, 0, 0, 0.5);
        }
      }
      & img {
        width: 80%;
        height: 180px;
        border-radius: 0 20% 0 20%;
      }
    }
  }
}

@media screen and(max-width:768px) {
  .portfolio {
    margin-bottom: 50px;
    & .projects {
      &-card {
        &-title {
          font-size: 15px;
        }
        & a {
          font-size: 12px;
        }
        & img {
          width: 100%;
          height: 200px;
        }
      }
    }
  }
}
</style>