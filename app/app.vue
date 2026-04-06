<script setup>
const title = 'SitePilotPro';
const description = 'Piloter les chantiers';

useSeoMeta({
  title,
  description
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
