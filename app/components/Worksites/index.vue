<script setup lang="ts">
import WorksiteFilters from '~/components/Worksites/WorksiteFilters.vue';
import WorksiteCard from '~/components/Worksites/WorksiteCard.vue';
import WorksiteFormSlideover from '~/components/Worksites/WorksiteFormSlideover.vue';
import type { WorksiteStatusEnum } from '~/components/Worksites/Types/worksiteStatusEnum';

const { worksites, addWorksite, getNextCode } = useWorksites();

const pagination = ref({ pageSize: 8 });
const globalFilter = ref('');
const selectedStatus = ref<WorksiteStatusEnum>();
const gridPage = ref(1);

const isFormOpen = ref(false);
const nextCode = ref('');

const openAdd = () => {
  nextCode.value = getNextCode();
  isFormOpen.value = true;
};

const handleSave = (data: Parameters<typeof addWorksite>[0]) => {
  addWorksite(data);
  isFormOpen.value = false;
};

const filteredWorksites = computed(() => {
  gridPage.value = 1;
  return worksites.value.filter((w) => {
    const matchStatus = !selectedStatus.value || selectedStatus.value === 'all' || w.statut === selectedStatus.value;
    const search = globalFilter.value.toLowerCase();
    const matchSearch = !search
      || w.name.toLowerCase().includes(search)
      || (w.client_name?.toLowerCase().includes(search) ?? false)
      || w.adress.city.toLowerCase().includes(search)
      || (w.code?.toLowerCase().includes(search) ?? false);
    return matchStatus && matchSearch;
  });
});
</script>

<template>
  <WorksiteFormSlideover
    v-model:open="isFormOpen"
    :default-code="nextCode"
    @save="handleSave"
  />

  <div class="w-full space-y-4">
    <div class="flex flex-row justify-between">
      <WorksiteFilters
        v-model:global-filter="globalFilter"
        v-model:selected-status="selectedStatus"
      />

      <div class="flex items-center px-4 py-3.5">
        <UButton
          icon="i-lucide-plus"
          size="md"
          color="secondary"
          variant="solid"
          @click="openAdd"
        >
          {{ $t('worksite.add') }}
        </UButton>
      </div>
    </div>
  </div>

  <div
    v-if="filteredWorksites.length"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
  >
    <WorksiteCard
      v-for="worksite in filteredWorksites.slice((gridPage - 1) * pagination.pageSize, gridPage * pagination.pageSize)"
      :key="worksite.id"
      :worksite="worksite"
    />
  </div>
  <div
    v-else
    class="flex flex-col items-center justify-center py-16 text-muted gap-2"
  >
    <UIcon name="i-lucide-folder-open" class="size-10" />
    <span>Aucun chantier trouvé</span>
  </div>

  <div class="flex justify-end border-t border-default pt-4 px-4">
    <UPagination
      v-model:page="gridPage"
      :items-per-page="pagination.pageSize"
      :total="filteredWorksites.length"
    />
  </div>
</template>
