<script setup lang="ts">
import { formatDate } from '~/components/Tables/utils/dateUtils';
import {
  WorksiteStatusColorMap,
  type WorksiteStatusEnum,
  WorksiteStatusEnumMap
} from '~/components/Worksites/Types/worksiteStatusEnum';
import {
  WorksitePriorityColorMap,
  WorksitePriorityEnumMap,
  type WorksitePriorityEnum
} from '~/components/Worksites/Types/worksitePriorityEnum';
import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';

const props = defineProps<{ worksite: WorksiteInterface }>();

const getStatusColor = (status: WorksiteStatusEnum) => WorksiteStatusColorMap[status] ?? 'neutral';
const getStatusLabel = (status: WorksiteStatusEnum) => WorksiteStatusEnumMap.get(status) ?? 'Inconnu';
const getPriorityColor = (priorite: WorksitePriorityEnum) => WorksitePriorityColorMap[priorite] ?? 'neutral';
const getPriorityLabel = (priorite: WorksitePriorityEnum) => WorksitePriorityEnumMap.get(priorite) ?? '—';
</script>

<template>
  <NuxtLink
    :to="`/worksite/${props.worksite.id}`"
    class="rounded-lg border border-default bg-elevated p-4 flex flex-col gap-3 hover:shadow-md hover:border-primary/50 transition-all cursor-pointer"
  >
    <div class="flex items-start justify-between gap-2">
      <div class="flex flex-col gap-0.5 min-w-0">
        <span class="text-xs text-muted font-mono">{{ worksite.code ?? '—' }}</span>
        <h3 class="font-semibold text-base truncate">{{ worksite.name }}</h3>
      </div>
      <UBadge
        :color="getStatusColor(worksite.statut)"
        :label="getStatusLabel(worksite.statut)"
        size="sm"
        class="shrink-0"
      />
    </div>

    <div class="flex flex-col gap-1.5 text-sm text-muted">
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-user" class="size-4 shrink-0" />
        <span class="truncate">{{ worksite.client_name ?? '—' }}</span>
      </div>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-map-pin" class="size-4 shrink-0" />
        <span class="truncate">{{ worksite.adress.city }} ({{ worksite.adress.zip_code }})</span>
      </div>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-calendar" class="size-4 shrink-0" />
        <span>{{ formatDate(worksite.start_date) || '—' }}</span>
        <span v-if="worksite.end_date">→ {{ formatDate(worksite.end_date) }}</span>
      </div>
    </div>

    <div class="flex items-center justify-between pt-1 border-t border-default">
      <UBadge
        v-if="worksite.priorite"
        :color="getPriorityColor(worksite.priorite)"
        :label="getPriorityLabel(worksite.priorite)"
        size="sm"
        variant="subtle"
      />
      <span v-else />
      <UIcon name="i-lucide-chevron-right" class="size-4 text-muted" />
    </div>
  </NuxtLink>
</template>
