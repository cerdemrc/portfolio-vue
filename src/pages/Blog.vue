<template>
  <div class="blog">
    <b-container>
      <h1 style="text-align: center">BLOG IS UNDER CONSTRUCTION...</h1>
      <b-row>
        <b-col cols="12" class="mt-4" v-for="blog in blogs" :key="blog.title">
          <a :href="blog.readMore" class="blog-card-link">
            <div class="blog-card">
              <div class="blog-card-content">
                <h2 class="blog-card-title">{{ blog.title }}</h2>
                <p class="blog-card-text">
                  {{ blog.text }}
                </p>
                <p class="blog-card-read-more">
                  <a :href="blog.readMore">Read more</a> ·
                  {{ blog.readMin }} min read
                </p>
              </div>
              <p class="blog-card-footer">
                Last updated {{ lastUpdate(blog.date) }} ago
              </p>
            </div>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import blogs from "../data/blog.json";
export default {
  name: "Blog",
  data() {
    return {
      blogs,
    };
  },
  methods: {
    lastUpdate(date) {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = mm + "/" + dd + "/" + yyyy;

      function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);

        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays + " days";
      }

      return getNumberOfDays(date, today);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/blog.scss";
</style>