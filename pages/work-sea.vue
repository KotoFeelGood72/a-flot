<template>
  <NuxtLayout
    class="section-hero section-hero-post section-back-none section-back-work"
    name="custom"
  >
    <section class="section-about section-work">
      <div class="container">
        <div class="about">
          <div class="work-subtext work-subtextst">
            <strong class="work-subtitle">Реальные истории моряков..</strong><br /><br />
            <template v-for="(item, i) in history" :key="'history-item-' + i">
              <strong>{{ item.title }}</strong
              ><br /><br />
              {{ item.content }}
              <br /><br />
            </template>

            Подробнее о том, какие именно документы нужны для работы в море вы можете
            узнать в блоке <NuxtLink to="/flot-dock">Морские документы.</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import api from "@/api/api";
const history = ref(null);

async function getHistory() {
  const { data } = await api.get("/real-history");
  history.value = data;
}

onMounted(async () => {
  await getHistory();
});
</script>

<style lang="scss" scoped></style>
