<template>
  <div class="portfolio">
    <div class="projects">
      <b-container>
        <b-row>
          <b-col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            v-for="project in Projects"
            :key="project.name"
          >
            <div class="projects-card">
              <img
                class="projects-card-image"
                :src="require('../assets/projects/' + project.image)"
              />
              <h3 class="projects-card-title">{{ project.name }}</h3>
              <div class="projects-card-links">
                <a :href="project.code" target="_blank" title="See Code"
                  ><img src="../assets/svg/see-code.svg"
                /></a>
                <a :href="project.project" target="_blank" title="See Project"
                  ><img src="../assets/svg/go-project.svg"
                /></a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Projects from "../data/projects.json";
export default {
  name: "Portfolio",
  data() {
    return {
      Projects,
    };
  },
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
        line-height: 24px;
        font-weight: 500;
      }
      &-links {
        display: flex;
        justify-content: center;
        align-items: center;
        & a {
          margin: 0 5px;
        }
      }
      &-image {
        width: 80%;
        height: 180px;
        border-radius: 0 20% 0 20%;
      }
    }
  }
}

.dark {
  & h3 {
    color: #fff;
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
        &-image {
          width: 100%;
          height: 200px;
        }
      }
    }
  }
}
</style>