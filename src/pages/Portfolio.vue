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
              <a
                class="projects-card-image"
                :href="project.project"
                target="blank"
              >
                <img :src="require('../assets/projects/' + project.image)"
              /></a>
              <h3 class="projects-card-title">{{ project.name }}</h3>
              <h4 class="projects-card-techs">
                {{ project.techs }}
              </h4>
              <div class="projects-card-links">
                <a
                  v-if="project.project"
                  :href="project.project"
                  target="_blank"
                  >LIVE PREVIEW</a
                >
                <a :href="project.code" target="_blank">GITHUB</a>
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
@import "@/assets/styles/portfolio.scss";
</style>