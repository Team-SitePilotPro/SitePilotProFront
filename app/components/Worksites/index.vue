<script setup lang="ts">
import { resolveComponent } from 'vue';
import { getPaginationRowModel } from '@tanstack/vue-table';
import { worksitesData } from '~/data/worksite';
import type { WorksiteStatusEnum } from '~/components/Worksites/Types/worksiteStatusEnum';
import { useTableColumns } from '~/components/Tables/Composables/useTableColumns';
import WorksiteFilters from '~/components/Worksites/WorksiteFilters.vue';
import {upperFirst} from "scule";

const UButton = resolveComponent('UButton');

const table = useTemplateRef('table');
const { worksiteColumns } = useTableColumns();
const pagination = ref({
  pageIndex: 0,
  pageSize: 5
});
const globalFilter = ref('');
const selectedStatus = ref<WorksiteStatusEnum>();
</script>

<template>
  <div class="w-full space-y-4">
    <div class="flex flex-row justify-between">
      <div class="flex">
        <WorksiteFilters
          v-model:global-filter="globalFilter"
          v-model:selected-status="selectedStatus"
        />
        <UDropdownMenu
          :items="table?.tableApi?.getAllColumns().filter(column => column.getCanHide()).map(column => ({
            label: upperFirst(column.id),
            type: 'checkbox' as const,
            checked: column.getIsVisible(),
            onUpdateChecked(checked: boolean) {
              table?.tableApi?.getColumn(column.id)?.toggleVisibility(!!checked)
            },
            onSelect(e: Event) {
              e.preventDefault()
            }
          }))"
          :content="{ align: 'end' }"
        >
        <div class="px-4 py-3.5">
          <UButton
              label="Affichage"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-chevron-down"
              class="ml-auto"
              aria-label="Columns select dropdown"
          />
        </div>
        </UDropdownMenu>
      </div>
      <div class="flex px-4 py-3.5">
        <UButton
          icon="i-lucide-plus"
          size="md"
          color="secondary"
          variant="solid"
        >
          Ajouter un chantier
        </UButton>
      </div>
    </div>
  </div>
  <UTable
    ref="table"
    v-model:pagination="pagination"
    v-model:global-filter="globalFilter"
    :data="worksitesData"
    :columns="worksiteColumns"
    :pagination-options="{
      getPaginationRowModel: getPaginationRowModel()
    }"
    class="flex-1"
  >
    <template #expanded="{ row }">
      <pre>{{ row.original }}</pre>
    </template>
  </UTable>

  <div class="flex justify-end border-t border-default pt-4 px-4">
    <UPagination
      :page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
      :items-per-page="table?.tableApi?.getState().pagination.pageSize"
      :total="table?.tableApi?.getFilteredRowModel().rows.length"
      @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
    />
  </div>
</template>
