<template>
  <NuxtLayout class="section-hero-news">
    <div class="hero hero-news">
      <div class="container">
        <div class="hero-block">
          <h1 class="hero-title hero-title-dock">Морские новости</h1>
          <div class="hero-text">Пример краткого текста</div>
        </div>
      </div>
    </div>
    <section class="section-news">
      <div class="container">
        <div class="news">
          <div class="news-block">
            <div class="news-item" v-for="item in news" :key="item._id">
              <NuxtLink :to="`/news/${item._id}`" class="news-img">
                <img src="assets/img/news/image.png" alt="image" />
              </NuxtLink>
              <div class="news-content">
                <div class="news-info">
                  <div class="news-date">{{ item.created_at }}</div>
                  <div class="news-view">
                    <img src="assets/img/news/icon.svg" alt="image" /><span>{{
                      item.view_count
                    }}</span>
                  </div>
                </div>
                <NuxtLink :to="`/news/${item._id}`" class="news-title">{{
                  item.title
                }}</NuxtLink>
                <div class="news-text">{{ truncateText(item.content) }}</div>
                <NuxtLink :to="`/news/${item._id}`" class="news-link"
                  >Читать подробнее</NuxtLink
                >
              </div>
            </div>
          </div>

          <div class="flot-nav news-nav">
            <a href="#" class="flot-nav__prev flot-nav__a">
              <img src="assets/img/flot/prev.svg" alt="image" />
            </a>

            <div class="flot-nav__block">
              <a href="#" class="flot-nav__a">1</a>

              <a href="#" class="flot-nav__a">2</a>

              <a href="#" class="flot-nav__a">3</a>

              <a href="#" class="flot-nav__a">4</a>

              <a href="#" class="flot-nav__a">5</a>

              <a href="#" class="flot-nav__a">...</a>

              <a href="#" class="flot-nav__a">14</a>
            </div>

            <a href="#" class="flot-nav__next flot-nav__a">
              <img src="assets/img/flot/next.svg" alt="image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { truncateText } from "~/utils/WrapText";
import { onMounted } from "vue";
import api from "@/api/api";
import { ref } from "vue";
const news = ref(null);

// definePageMeta({
//   middleware: "auth",
// });

async function fethNews() {
  try {
    const { data } = await api.get("/news");
    news.value = data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fethNews();
});
</script>

<style lang="scss" scoped></style>
