<template>
  <div class="about-page">
    <div class="about">
      <div class="about-content">
        <h2>Ceren Demirci</h2>
        <h6>Jr. Frontend Developer</h6>
        <p>
          I graduated from computer engineering in June 2020. I'm working with
          Vue js and responsive web design, using Scss. I'm on my way to
          becoming a good developer. But for now I am a front end developer with
          a passion for lifelong learning. When I’m not coding, I enjoy learning
          new technologies, playing computer games and solving sudoku. And I'm
          currently working on Mevn Stack. <br /><br />
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
        <img class="technology-content-icon" src="../assets/svg/html.svg" />
        <img class="technology-content-icon" src="../assets/svg/css.svg" />
        <img class="technology-content-icon" src="../assets/svg/sass.svg" />
        <img class="technology-content-icon" src="../assets/svg/js.svg" />
        <img class="technology-content-icon" src="../assets/svg/vue.svg" />
        <img class="technology-content-icon" src="../assets/node.png" />
        <img
          class="technology-content-icon"
          src="../assets/svg/bootstrap.svg"
        />
        <img
          class="technology-content-icon mb-2"
          src="../assets/svg/gulp.svg"
        />
        <img class="technology-content-icon mt-2" src="../assets/svg/npm.svg" />
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
@import "@/assets/styles/about.scss";
</style>