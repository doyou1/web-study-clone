<script setup lang="ts">
import NavView from "@/components/main/nav/NavView.vue";
import IntroView from "@/components/main/items/IntroView.vue";
import SponsorListView from "@/components/main/items/SponsorListView.vue";
import FooterView from "@/components/main/footer/FooterView.vue";

import { useIsDarkStore } from "@/pinia/pinia";
const isDarkStore = useIsDarkStore();
</script>

<template>
  <div :class="{ dark: isDarkStore.isDark }">
    <NavView />
    <IntroView />
    <SponsorListView />
    <FooterView />
  </div>
</template>
