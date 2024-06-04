<template>
  <NuxtLayout class="section-hero navy">
    <div class="hero">
      <div class="container">
        <div class="hero-block">
          <h1 class="hero-title">Морской флот</h1>
        </div>
      </div>
    </div>

    <section class="section-flot">
      <div class="container">
        <div class="flot">
          <div class="flot-sort">
            <div class="flot-sort__title">Поиск по названию:</div>

            <input type="search" value="" class="navy-search" placeholder="Поиск" />
          </div>

          <div class="flot-block flot-content-navy">
            <div class="flot-info">
              <div class="flot-content">
                <FlotItem />
              </div>

              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import FlotItem from "~/components/list/FlotItem.vue";
import api from "@/api/api";
import Pagination from "./../components/uikit/Pagination.vue";

const flots = ref(null);

async function getFlots() {
  const { data } = await api.get("/navy");
  flots.value = data;
}

onMounted(async () => {
  await getFlots();
});
</script>

<style lang="scss" scoped></style>
