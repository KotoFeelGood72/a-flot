<template>
  <NuxtLayout class="section-hero">
    <div class="hero">
      <div class="container">
        <div class="hero-block">
          <h1 class="hero-title">Вакансии для моряков</h1>

          <div class="search-block">
            <div class="search-block__header">
              <div>
                <img src="assets/img/search/filter.png" alt="" />
                Фильтр по вакансиям
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
          <h2 class="search-title">Вакансий под заданные критерии: <span>468</span></h2>

          <div class="flot-block flot-block-side flot-block-vak">
            <div class="flot-info">
              <div class="flot-content flot-content-search">
                <div class="vacancy-list search-vacancy-list">
                  <VacancyDefaultItem
                    v-for="(item, i) in vacancies"
                    :data="item"
                    :key="'vacancies-item-' + i"
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
              <VacancySidebarItem />
            </aside>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import VacancyDefaultItem from "~/components/list/VacancyDefaultItem";
import VacancySidebarItem from "~/components/list/VacancySidebarItem.vue";
import api from "@/api/api";

const vacancies = ref(null);

async function getVacancies() {
  const { data } = await api.get("/all-vacancies");
  vacancies.value = data;
}

onMounted(async () => {
  await getVacancies();
});
</script>

<style lang="scss" scoped></style>
