<template>
  <NuxtLayout class="section-hero">
    <div class="hero">
      <div class="container">
        <div class="hero-block">
          <h1 class="hero-title">Резюме моряков</h1>

          <div class="search-block">
            <div class="search-block__header">
              <div>
                <img src="assets/img/search/filter.png" alt="" />
                Фильтр по морякам
              </div>
              <div>
                <img src="assets/img/search/search.png" alt="" />
                Поиск
              </div>
            </div>
            <div class="search-block__filter">
              <div class="select">
                <div>
                  <span>Выбрано: 1</span><br />
                  Старший помощ...
                </div>
              </div>
              <div class="select">Зарплата</div>
              <div class="select">Дата посадки</div>
              <div class="select">Период контракта</div>
              <div class="select">Тип судна</div>
            </div>

            <div class="search-block-end search-block-rend">
              <button class="search-button-opacity">Сбросить</button>
              <div class="search-button-red">
                Найти
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-flot section-res">
      <div class="container">
        <div class="flot">
          <h2 class="search-title">Моряков под заданные критерии: <span>54</span></h2>

          <div class="flot-block flot-block-side">
            <div class="flot-info">
              <div class="flot-content flot-content-search">
                <div class="vacancy-list search-vacancy-list">
                  <ResumeItem
                    v-for="item in resumes?.vacancies"
                    :key="'resumes-item-page-' + i"
                    :data="item"
                  />
                </div>
              </div>

              <div class="flot-nav">
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

            <aside class="flot-aside">
              <a href="#" class="flot-aside__link">
                <span class="flot-aside__text"> Продление документов </span>

                <span>→</span>
              </a>

              <a href="#" class="flot-aside__link">
                <span class="flot-aside__text">
                  Курсы повышения квалификации моряка
                </span>

                <span>→</span>
              </a>

              <a href="flot-dock.html" class="flot-aside__link">
                <span class="flot-aside__text"> Все виды морских сертификатов </span>

                <span>→</span>
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import api from "@/api/api";
import ResumeItem from "~/components/list/ResumeItem.vue";
const resumes = ref(null);

async function getResumes() {
  const { data } = await api.get("/resumes");
  resumes.value = data;
}

onMounted(() => {
  getResumes();
});
</script>

<style lang="scss" scoped></style>
