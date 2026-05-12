<script lang="ts" setup>
import WorksiteFormSlideover from '~/components/Worksites/WorksiteFormSlideover.vue';
import {
  WorksiteStatusColorMap,
  WorksiteStatusEnumMap
} from '~/components/Worksites/Types/worksiteStatusEnum';
import {
  WorksitePriorityColorMap,
  WorksitePriorityEnumMap
} from '~/components/Worksites/Types/worksitePriorityEnum';
import { formatDate } from '~/components/Tables/utils/dateUtils';
import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';

const route = useRoute();
const id = Number(route.params.id);
const { worksites, updateWorksite } = useWorksites();

const worksite = computed(() => worksites.value.find(w => w.id === id));

useHead({
  title: computed(() => worksite.value?.name ?? 'Chantier')
});

const isFormOpen = ref(false);

const handleSave = (data: Omit<WorksiteInterface, 'id'> & { id?: number }) => {
  updateWorksite(data as WorksiteInterface);
  isFormOpen.value = false;
};

const tabs = [
  { label: 'Fiche information', slot: 'info' as const, icon: 'i-lucide-file-text' },
  { label: 'Documents', slot: 'documents' as const, icon: 'i-lucide-folder' },
  { label: 'Notes du chantier', slot: 'notes' as const, icon: 'i-lucide-sticky-note' }
];
</script>

<template>
  <div v-if="worksite" class="space-y-6">
    <WorksiteFormSlideover
      v-model:open="isFormOpen"
      :worksite="worksite"
      @save="handleSave"
    />

    <!-- Header -->
    <div class="flex items-start gap-4">
      <UButton
        icon="i-lucide-arrow-left"
        color="neutral"
        variant="ghost"
        to="/worksite"
      />

      <div class="flex-1 min-w-0">
        <p class="text-xs text-muted font-mono mb-0.5">{{ worksite.code ?? '—' }}</p>
        <h1 class="text-2xl font-bold truncate">{{ worksite.name }}</h1>
        <p v-if="worksite.description" class="text-sm text-muted mt-1">
          {{ worksite.description }}
        </p>
      </div>

      <div class="flex items-center gap-2 shrink-0">
        <UBadge
          :color="WorksiteStatusColorMap[worksite.statut] ?? 'neutral'"
          :label="WorksiteStatusEnumMap.get(worksite.statut) ?? ''"
          size="lg"
        />
        <UButton
          icon="i-lucide-pencil"
          label="Éditer"
          color="secondary"
          variant="solid"
          @click="isFormOpen = true"
        />
      </div>
    </div>

    <!-- Tabs -->
    <UTabs :items="tabs" variant="link" class="w-full">
      <!-- Fiche information -->
      <template #info>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <!-- Informations générales -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-muted uppercase tracking-widest">
              Informations générales
            </h3>

            <div class="rounded-lg border border-default divide-y divide-default">
              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Statut</span>
                <UBadge
                  :color="WorksiteStatusColorMap[worksite.statut] ?? 'neutral'"
                  :label="WorksiteStatusEnumMap.get(worksite.statut) ?? ''"
                  size="sm"
                />
              </div>

              <div v-if="worksite.priorite" class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Priorité</span>
                <UBadge
                  :color="WorksitePriorityColorMap[worksite.priorite] ?? 'neutral'"
                  :label="WorksitePriorityEnumMap.get(worksite.priorite) ?? ''"
                  size="sm"
                  variant="subtle"
                />
              </div>

              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Client</span>
                <span class="text-sm font-medium">{{ worksite.client_name ?? '—' }}</span>
              </div>

              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Date de début</span>
                <span class="text-sm font-medium">{{ formatDate(worksite.start_date) }}</span>
              </div>

              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Date de fin</span>
                <span class="text-sm font-medium">{{ formatDate(worksite.end_date) }}</span>
              </div>
            </div>
          </div>

          <!-- Adresse -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-muted uppercase tracking-widest">
              Adresse du chantier
            </h3>

            <div class="rounded-lg border border-default divide-y divide-default">
              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Rue</span>
                <span class="text-sm font-medium">{{ worksite.adress.street }}</span>
              </div>
              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Ville</span>
                <span class="text-sm font-medium">{{ worksite.adress.city }}</span>
              </div>
              <div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-muted">Code postal</span>
                <span class="text-sm font-medium">{{ worksite.adress.zip_code }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Documents -->
      <template #documents>
        <div class="flex flex-col items-center justify-center py-20 text-muted gap-3 pt-4">
          <UIcon name="i-lucide-folder-open" class="size-12" />
          <p class="text-base font-medium">Aucun document pour ce chantier</p>
          <UButton icon="i-lucide-upload" label="Ajouter un document" color="secondary" variant="outline" />
        </div>
      </template>

      <!-- Notes -->
      <template #notes>
        <div class="flex flex-col items-center justify-center py-20 text-muted gap-3 pt-4">
          <UIcon name="i-lucide-sticky-note" class="size-12" />
          <p class="text-base font-medium">Aucune note pour ce chantier</p>
          <UButton icon="i-lucide-plus" label="Ajouter une note" color="secondary" variant="outline" />
        </div>
      </template>
    </UTabs>
  </div>

  <!-- Chantier introuvable -->
  <div v-else class="flex flex-col items-center justify-center py-20 gap-4">
    <UIcon name="i-lucide-alert-circle" class="size-12 text-muted" />
    <p class="text-lg font-medium">Chantier introuvable</p>
    <UButton label="Retour à la liste" icon="i-lucide-arrow-left" to="/worksite" />
  </div>
</template>
