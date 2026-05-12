<script setup lang="ts">
import { UButton, UDropdownMenu } from '#components';
import type { DropdownMenuItem } from '@nuxt/ui';

const props = defineProps<{ worksiteId?: number }>();

const items: DropdownMenuItem[] = [
  { type: 'label', label: 'Actions' },
  {
    label: 'Voir fiche',
    icon: 'i-lucide-eye',
    onSelect: () => {
      if (props.worksiteId) navigateTo(`/worksite/${props.worksiteId}`);
    }
  },
  { type: 'separator' },
  { label: 'Supprimer', icon: 'i-lucide-trash-2', color: 'error' as const }
];
</script>

<template>
  <UDropdownMenu :items="items" content-align="end">
    <div class="flex justify-center">
      <UButton
        icon="i-lucide-ellipsis-vertical"
        color="neutral"
        variant="ghost"
      />
    </div>
  </UDropdownMenu>
</template>
