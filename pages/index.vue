<template>
  <NuxtLayout name="fullscreen">
    <div id="fullpage">
      <div class="section section-content-1">
        <div class="main-content main-content-one">
          <div class="main-block-one">
            <h2 class="content-h2">Работа в море</h2>

            <div class="content-menu">
              <NuxtLink
                v-for="(navItem, i) in MenuSea"
                :key="'navItemMenu-' + i"
                :to="navItem.link"
                class="nav-link"
              >
                <template
                  v-for="(part, index) in splitNewLines(navItem.name)"
                  :key="index"
                >
                  <span>{{ part }}</span>
                  <br v-if="index < splitNewLines(navItem.name).length - 1" />
                </template>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-content-2">
        <div class="main-content main-content-two">
          <div class="main-block-two">
            <div class="content-menu content-menu-2">
              <NuxtLink
                v-for="(navItem, i) in MenuSea"
                :key="'navItemMenu-' + i"
                :to="navItem.link"
                class="nav-link"
              >
                <template
                  v-for="(part, index) in splitNewLines(navItem.name)"
                  :key="index"
                >
                  <span>{{ part }}</span>
                  <br v-if="index < splitNewLines(navItem.name).length - 1" />
                </template>
              </NuxtLink>
            </div>

            <div class="vak">
              <ul class="vak-list" id="vakNav">
                <li
                  v-for="(tabLink, index) in tabLinks"
                  :key="'tab-link-' + index"
                  @click="activeTabIndex = index"
                >
                  <a :class="{ 'vak-active': activeTabIndex === index }">
                    <div class="vak-list-text">{{ tabLink.name }}</div>
                    <div class="vak-list-dop">{{ tabLink.txt }}</div>
                  </a>
                </li>
              </ul>
              <div id="vaksWrap" class="vak-block" v-if="(main && main[0]) || main[1]">
                <div class="vak-tab" :class="{ 'vak-active': activeTabIndex === 0 }">
                  <div class="vak-part">
                    <VakItem
                      v-for="(item, i) in main[0].new_vacancy"
                      :key="'vacancy-item' + i"
                      :card="item"
                    />
                  </div>
                </div>
                <div class="vak-tab" :class="{ 'vak-active': activeTabIndex === 1 }">
                  <div class="vak-part">
                    <ResItem
                      v-for="(item, i) in main[1].new_resume"
                      :key="'new_resume-item' + i"
                      :card="item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-content section-content-3">
        <div class="main-content main-content-two">
          <div class="main-block-three">
            <div class="about-title-main">Почему выбирают нас</div>

            <div class="about-block about-block-main">
              <div class="about-item">
                <img src="assets/img/about/1.png" alt="image" class="about-item__img" />
                <div class="about-info">
                  <div class="about-info__title">
                    <span class="about-info__reg">Автоматизация подбора моряков:</span>
                  </div>

                  <div class="about-info__text">
                    За счет возможности отправки персональных предложений морякам ,
                    отправки групповых рассылок отсортированным морякам.
                  </div>
                </div>
              </div>

              <div class="about-item">
                <img src="assets/img/about/2.png" alt="image" class="about-item__img" />
                <div class="about-info">
                  <div class="about-info__title">
                    <span class="about-info__reg">Скорость обмена информацией:</span>
                  </div>

                  <div class="about-info__text">
                    Моряки мгновенно получают уведомление о вакансии или персональном
                    предложении на свой мобильный телефон и могут принять предложение.
                  </div>
                </div>
              </div>

              <div class="about-item">
                <img src="assets/img/about/3.png" alt="image" class="about-item__img" />
                <div class="about-info">
                  <div class="about-info__title">
                    <span class="about-info__reg">Отображение статусов:</span>
                  </div>

                  <div class="about-info__text">
                    На сервисе отдельно отображены моряки со статусом «Ищу работу» и
                    «Срочные вакансии».
                  </div>
                </div>
              </div>

              <div class="about-item">
                <img src="assets/img/about/4.png" alt="image" class="about-item__img" />
                <div class="about-info">
                  <div class="about-info__title">
                    <span class="about-info__reg">Маркетинговые инструменты:</span>
                  </div>

                  <div class="about-info__text">
                    Мы используем передовые маркетинговые инструменты и привлекаем к
                    сервису компании и моряков всего Дальневосточного региона.
                  </div>
                </div>
              </div>

              <div class="about-item">
                <img src="assets/img/about/5.png" alt="image" class="about-item__img" />
                <div class="about-info">
                  <div class="about-info__title">
                    <span class="about-info__reg">Личные выгоды компании:</span>
                  </div>

                  <div class="about-info__text">
                    Используя сервис- Афлот, Вы сократите время на звонки по неактуальным
                    анкетам моряков, при этом повысите конверсию откликов на вакансию.
                  </div>
                </div>
              </div>

              <div class="about-item">
                <img src="assets/img/about/6.png" alt="image" class="about-item__img" />
                <div class="about-info">
                  <div class="about-info__title">
                    <span class="about-info__reg">Личные выгоды моряка:</span>
                  </div>

                  <div class="about-info__text">
                    Используя сервис- Афлот, Вам больше не нужно звонить по компаниям и
                    составлять множество анкет – предложения о работе теперь поступают вам
                    на телефон.
                  </div>
                </div>
              </div>
            </div>

            <div class="content-menu content-menu-2 content-menu-3">
              <NuxtLink
                v-for="(navItem, i) in MenuSea"
                :key="'navItemMenu-' + i"
                :to="navItem.link"
                class="nav-link"
              >
                <template
                  v-for="(part, index) in splitNewLines(navItem.name)"
                  :key="index"
                >
                  <span>{{ part }}</span>
                  <br v-if="index < splitNewLines(navItem.name).length - 1" />
                </template>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-content section-content-4">
        <div class="main-content main-content-two">
          <div class="main-block-two main-block-four">
            <div class="content-menu content-menu-2">
              <NuxtLink
                v-for="(navItem, i) in MenuSea"
                :key="'navItemMenu-' + i"
                :to="navItem.link"
                class="nav-link"
              >
                <template
                  v-for="(part, index) in splitNewLines(navItem.name)"
                  :key="index"
                >
                  <span>{{ part }}</span>
                  <br v-if="index < splitNewLines(navItem.name).length - 1" />
                </template>
              </NuxtLink>
            </div>

            <div class="vak new-vak">
              <ul class="vak-list">
                <li v-for="(item, i) in newsLinks" :key="'news-item-link' + i">
                  <a
                    :class="{ 'vak-active': activeTabNewsIndex === i }"
                    @click="activeTabNewsIndex = i"
                  >
                    <div class="vak-list-text">{{ item.name }}</div>
                    <div class="vak-list-dop">{{ item.txt }}</div>
                  </a>
                </li>
              </ul>
              <div id="vaksWrap1" class="vak-block">
                <div class="vak-tab" :class="{ 'vak-active': activeTabNewsIndex === 0 }">
                  <div class="new-block" v-if="main && main[2]">
                    <Swiper
                      :slides-per-view="3"
                      :loop="true"
                      :space-between="30"
                      :modules="[Navigation]"
                      :navigation="{
                        prevEl: `.new-prev`,
                        nextEl: `.new-next`,
                      }"
                    >
                      <SwiperSlide
                        v-for="(item, i) in main[2].new_news"
                        :key="'item-slide-' + i"
                      >
                        <NewSlide :data="item" />
                      </SwiperSlide>
                    </Swiper>

                    <div class="new-dop">
                      <div class="new-prev new-arrow" id="new-prev">←</div>
                      <NuxtLink to="/news" class="new-link">
                        <span>Все новости</span>
                        <img src="assets/img/new/new-icon.svg" alt="image" />
                      </NuxtLink>
                      <div class="new-next new-arrow" id="new-next">→</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="vaksWrap2" class="vak-block">
                <div class="vak-tab" :class="{ 'vak-active': activeTabNewsIndex === 1 }">
                  <div class="new-block" v-if="main && main[2]">
                    <Swiper
                      :slides-per-view="3"
                      :loop="true"
                      :space-between="30"
                      :modules="[Navigation]"
                      :navigation="{
                        prevEl: `.new-prev`,
                        nextEl: `.new-next`,
                      }"
                    >
                      <SwiperSlide
                        v-for="(item, i) in main[2].interesting"
                        :key="'item-slide-' + i"
                      >
                        <NewSlide :data="item" />
                      </SwiperSlide>
                    </Swiper>

                    <div class="new-dop">
                      <div class="new-prev new-arrow" id="new-prev">←</div>
                      <NuxtLink to="/news" class="new-link">
                        <span>Все новости</span>
                        <img src="assets/img/new/new-icon.svg" alt="image" />
                      </NuxtLink>
                      <div class="new-next new-arrow" id="new-next">→</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-dop">
      <img src="assets/img/main/dop.png" alt="image" class="info-dop__img" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { MenuSea } from "~/consts/MenuConsts";
import VakItem from "~/components/list/VakItem.vue";
import ResItem from "~/components/list/ResItem.vue";
import NewSlide from "~/components/list/NewSlide.vue";
import api from "@/api/api";
import { Navigation } from "swiper/modules";
import { useGlobalStore, useGlobalStoreRefs } from "~/store/useGlobalStore";

const activeTabIndex = ref(0);
const activeTabNewsIndex = ref(0);
const main = ref({});
const tabLinks = ref([
  { name: "Вакансии", txt: "новые" },
  { name: "Резюме", txt: "новые" },
]);
const newsLinks = ref([
  { name: "Новости", txt: "новые" },
  { name: "Интересное", txt: "новые" },
]);

const { setActiveSection } = useGlobalStore();
const { activeSection } = useGlobalStoreRefs();

function splitNewLines(text) {
  return text.split("<br/>");
}

async function fetchMain() {
  const { data } = await api.get("/main");
  main.value = data;
}

// Полноэкранная прокрутка
let inMove = ref(false);
const offsets = ref([]);
let touchStartY = ref(0);
const inMoveDelay = 400;

function calculateSectionOffsets() {
  let sections = document.getElementsByClassName("section");
  let length = sections.length;

  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop;
    offsets.value.push(sectionOffset);
  }
}

function handleMouseWheel(e) {
  if (e.wheelDelta < 0 && !inMove.value) {
    moveUp();
  } else if (e.wheelDelta > 0 && !inMove.value) {
    moveDown();
  }

  e.preventDefault();
  return false;
}

function handleMouseWheelDOM(e) {
  if (e.detail > 0 && !inMove.value) {
    moveUp();
  } else if (e.detail < 0 && !inMove.value) {
    moveDown();
  }

  return false;
}

function moveDown() {
  if (activeSection.value <= 0) return;

  inMove.value = true;
  activeSection.value--;

  scrollToSection(activeSection.value, true);
  setActiveSection(activeSection.value);
}

function moveUp() {
  if (activeSection.value >= offsets.value.length - 1) return;

  inMove.value = true;
  activeSection.value++;

  scrollToSection(activeSection.value, true);
  setActiveSection(activeSection.value);
}

function scrollToSection(id, force = false) {
  if (inMove.value && !force) return false;

  activeSection.value = id;
  inMove.value = true;

  let section = document.getElementsByClassName("section")[id];
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  setTimeout(() => {
    inMove.value = false;
  }, inMoveDelay);
}

function touchStart(e) {
  e.preventDefault();
  touchStartY.value = e.touches[0].clientY;
}

function touchMove(e) {
  if (inMove.value) return false;
  e.preventDefault();

  const currentY = e.touches[0].clientY;

  if (touchStartY.value < currentY) {
    moveDown();
  } else {
    moveUp();
  }

  touchStartY.value = 0;
  return false;
}

onMounted(() => {
  fetchMain();
  calculateSectionOffsets();

  window.addEventListener("DOMMouseScroll", handleMouseWheelDOM);
  window.addEventListener("mousewheel", handleMouseWheel, { passive: false });

  window.addEventListener("touchstart", touchStart, { passive: false });
  window.addEventListener("touchmove", touchMove, { passive: false });
});

onBeforeUnmount(() => {
  window.removeEventListener("DOMMouseScroll", handleMouseWheelDOM);
  window.removeEventListener("mousewheel", handleMouseWheel, { passive: false });

  window.removeEventListener("touchstart", touchStart);
  window.removeEventListener("touchmove", touchMove);
});
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  overflow: hidden;
  margin: 0;
}

#fullpage {
  scroll-behavior: smooth;
}

.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease-in-out;
}

.fixed-dop {
  position: fixed;
  bottom: 0;
  right: 0;
}

.section-content-1 {
  display: flex;
  align-items: center;
  justify-content: end;
}
.section-content-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
