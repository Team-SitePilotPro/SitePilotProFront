<script setup lang="ts">
import type { WorksiteStatusEnum } from '~/components/Worksites/Types/worksiteStatusEnum';
import { WorksiteStatusEnumMap } from '~/components/Worksites/Types/worksiteStatusEnum';

const globalFilter = defineModel<string>('globalFilter');
const selectedStatus = defineModel<WorksiteStatusEnum>('selectedStatus');

const statusOptions = Array.from(WorksiteStatusEnumMap.entries()).map(([key, value]) => ({
  label: value,
  value: key as WorksiteStatusEnum
}));
</script>

<template>
  <div class="flex px-4 py-3.5 gap-2">
    <UInput
      v-model="globalFilter"
      class="w-sm"
      placeholder="Rechercher un chantier ..."
      icon="i-lucide-search"
    />
    <USelect
      v-model="selectedStatus"
      :items="statusOptions"
      class="w-48"
      placeholder="Sélectionner un statut"
      trailing-icon="i-lucide-arrow-down"
    />
  </div>
</template>
