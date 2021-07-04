<template>
  <div class="skills">
    <div class="skills-frontend">
      <h2 class="skills-subtitle">Frontend Development</h2>
      <label>HTML</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="95"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>CSS</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="90"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>Javascript</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="70"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>Vue JS</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="75"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>SASS&SCSS</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="90"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>Nuxt JS (Keep Learning)</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="20"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
    </div>
    <div class="skills-design">
      <h2 class="skills-subtitle">UI & UX Design</h2>
      <label>Figma</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="80"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>Adobe XD</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="75"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
      <label>Zeplin</label>
      <b-progress>
        <b-progress-bar
          :style="{ 'background-color': '#54b689' }"
          :value="70"
          show-progress
          animated
        ></b-progress-bar>
      </b-progress>
    </div>
    <div class="skills-tools">
      <h2 class="skills-subtitle">TOOLS</h2>
      <div class="skills-tools-content">
        <h6>NPM</h6>
        <h6>Webpack</h6>
        <h6>Bootstrap</h6>
        <h6>Babel</h6>
        <h6>Git</h6>
        <h6>VS Code</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 30px;
  padding: 0 50px;
  &-frontend {
    margin-top: 40px;
  }
  &-tools-content {
    display: flex;
    justify-content: center;
    & h6 {
      padding: 10px;
      border: 1px solid rgb(204, 204, 204);
      border-right: none;
      &:last-child {
        border-right: 1px solid rgb(204, 204, 204);
      }
    }
  }
  &-subtitle {
    font-size: 20px;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

//light theme
.light {
  .skills {
    &-tools-content {
      & h6 {
        color: #212529;
      }
    }
    & label {
      color: #212529;
    }
    &-subtitle {
      color: #212529;
    }
  }
}

//dark theme
.dark {
  .skills {
    &-tools-content {
      & h6 {
        color: #fff;
      }
    }
    & label,
    h2 {
      color: #fff;
    }
    &-subtitle {
      color: #fff;
    }
  }
}

@media screen and(max-width:768px) {
  .skills {
    &-tools-content {
      flex-direction: column;
      & h6 {
        padding: 5px;
        border-right: 1px solid rgb(204, 204, 204);
      }
    }
  }
}
</style>