<script setup lang="ts">
const globalFilter = defineModel<string>('globalFilter');
</script>

<template>
  <div class="flex px-4 py-3.5 gap-2">
    <UInput
      v-model="globalFilter"
      class="w-sm"
      placeholder="Rechercher un client ..."
      icon="i-lucide-search"
    />
  </div>
</template>
