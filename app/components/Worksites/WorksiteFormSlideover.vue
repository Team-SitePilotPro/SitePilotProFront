<script setup lang="ts">
import {
  WorksiteStatusEnum,
  WorksiteStatusEnumMap
} from '~/components/Worksites/Types/worksiteStatusEnum';
import {
  WorksitePriorityEnum,
  WorksitePriorityEnumMap
} from '~/components/Worksites/Types/worksitePriorityEnum';
import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';
import { clientsData } from '~/data/clients';

const props = defineProps<{
  open: boolean;
  worksite?: WorksiteInterface;
  defaultCode?: string;
}>();

const emit = defineEmits<{
  'update:open': [value: boolean];
  save: [worksite: Omit<WorksiteInterface, 'id'> & { id?: number }];
}>();

const isEditMode = computed(() => !!props.worksite);

const statusOptions = Array.from(WorksiteStatusEnumMap.entries())
  .filter(([key]) => key !== WorksiteStatusEnum.All)
  .map(([value, label]) => ({ label, value }));

const priorityOptions = [
  { label: '— Aucune —', value: undefined },
  ...Array.from(WorksitePriorityEnumMap.entries()).map(([value, label]) => ({ label, value }))
];

const clientOptions = clientsData.map(c => ({
  label: c.compagny ?? c.contact,
  value: c.id
}));

const toDateStr = (d?: Date) => d ? d.toISOString().split('T')[0] : '';

const form = reactive({
  name: '',
  code: '',
  description: '',
  client_id: undefined as number | undefined,
  statut: WorksiteStatusEnum.EnAttente as WorksiteStatusEnum,
  priorite: undefined as WorksitePriorityEnum | undefined,
  start_date: '',
  end_date: '',
  street: '',
  city: '',
  zip_code: '' as string | number
});

const errors = reactive<Record<string, string>>({});

const resetForm = () => {
  const w = props.worksite;
  form.name = w?.name ?? '';
  form.code = w?.code ?? props.defaultCode ?? '';
  form.description = w?.description ?? '';
  form.client_id = w?.client_id;
  form.statut = w?.statut ?? WorksiteStatusEnum.EnAttente;
  form.priorite = w?.priorite;
  form.start_date = toDateStr(w?.start_date);
  form.end_date = toDateStr(w?.end_date);
  form.street = w?.adress.street ?? '';
  form.city = w?.adress.city ?? '';
  form.zip_code = w?.adress.zip_code ?? '';
  Object.keys(errors).forEach(k => delete errors[k]);
};

watch(() => props.open, (val) => { if (val) resetForm(); });
watch(() => props.defaultCode, (val) => {
  if (!props.worksite && val) form.code = val;
});

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Requis';
  errors.client_id = form.client_id !== undefined ? '' : 'Requis';
  errors.street = form.street.trim() ? '' : 'Requis';
  errors.city = form.city.trim() ? '' : 'Requis';
  errors.zip_code = form.zip_code !== '' ? '' : 'Requis';
  return !Object.values(errors).some(Boolean);
};

const onSubmit = () => {
  if (!validate()) return;
  const client = clientsData.find(c => c.id === form.client_id);
  emit('save', {
    ...(props.worksite ? { id: props.worksite.id } : {}),
    name: form.name.trim(),
    code: form.code.trim() || undefined,
    description: form.description.trim() || undefined,
    client_id: form.client_id!,
    client_name: client?.compagny ?? client?.contact ?? '',
    user_id: 1,
    statut: form.statut,
    priorite: form.priorite,
    start_date: form.start_date ? new Date(form.start_date) : undefined,
    end_date: form.end_date ? new Date(form.end_date) : undefined,
    adress: {
      id: props.worksite?.adress.id ?? Date.now(),
      street: form.street.trim(),
      city: form.city.trim(),
      zip_code: Number(form.zip_code)
    }
  });
};
</script>

<template>
  <USlideover
    :open="open"
    side="right"
    :ui="{ width: 'max-w-lg' }"
    @update:open="emit('update:open', $event)"
  >
    <template #content>
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-default">
          <h2 class="text-lg font-semibold">
            {{ isEditMode ? 'Modifier le chantier' : 'Nouveau chantier' }}
          </h2>
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            size="sm"
            @click="emit('update:open', false)"
          />
        </div>

        <!-- Body -->
        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <!-- Informations générales -->
          <section class="space-y-3">
            <p class="text-xs font-semibold text-muted uppercase tracking-widest">
              Informations générales
            </p>

            <UFormField label="Nom du chantier" :error="errors.name" required>
              <UInput v-model="form.name" placeholder="Ex: Rénovation façade" class="w-full" />
            </UFormField>

            <div class="grid grid-cols-2 gap-3">
              <UFormField label="Code">
                <UInput v-model="form.code" placeholder="CH-2025-001" class="w-full" />
              </UFormField>

              <UFormField label="Statut" required>
                <USelect v-model="form.statut" :items="statusOptions" class="w-full" />
              </UFormField>
            </div>

            <UFormField label="Description">
              <UTextarea
                v-model="form.description"
                placeholder="Description optionnelle..."
                :rows="3"
                class="w-full"
              />
            </UFormField>
          </section>

          <!-- Planification -->
          <section class="space-y-3">
            <p class="text-xs font-semibold text-muted uppercase tracking-widest">
              Planification
            </p>

            <UFormField label="Priorité">
              <USelect
                v-model="form.priorite"
                :items="priorityOptions"
                class="w-full"
              />
            </UFormField>

            <div class="grid grid-cols-2 gap-3">
              <UFormField label="Date de début">
                <UInput v-model="form.start_date" type="date" class="w-full" />
              </UFormField>

              <UFormField label="Date de fin">
                <UInput v-model="form.end_date" type="date" class="w-full" />
              </UFormField>
            </div>
          </section>

          <!-- Client -->
          <section class="space-y-3">
            <p class="text-xs font-semibold text-muted uppercase tracking-widest">
              Client
            </p>

            <UFormField label="Client" :error="errors.client_id" required>
              <USelect
                v-model="form.client_id"
                :items="clientOptions"
                placeholder="Sélectionner un client..."
                class="w-full"
              />
            </UFormField>
          </section>

          <!-- Adresse -->
          <section class="space-y-3">
            <p class="text-xs font-semibold text-muted uppercase tracking-widest">
              Adresse du chantier
            </p>

            <UFormField label="Rue" :error="errors.street" required>
              <UInput v-model="form.street" placeholder="12 rue du Bâtiment" class="w-full" />
            </UFormField>

            <div class="grid grid-cols-2 gap-3">
              <UFormField label="Ville" :error="errors.city" required>
                <UInput v-model="form.city" placeholder="Lyon" class="w-full" />
              </UFormField>

              <UFormField label="Code postal" :error="errors.zip_code" required>
                <UInput
                  v-model="form.zip_code"
                  type="number"
                  placeholder="69001"
                  class="w-full"
                />
              </UFormField>
            </div>
          </section>
        </div>

        <!-- Footer -->
        <div class="flex justify-end gap-2 px-6 py-4 border-t border-default">
          <UButton color="neutral" variant="outline" @click="emit('update:open', false)">
            Annuler
          </UButton>
          <UButton color="secondary" variant="solid" @click="onSubmit">
            {{ isEditMode ? 'Enregistrer les modifications' : 'Créer le chantier' }}
          </UButton>
        </div>
      </div>
    </template>
  </USlideover>
</template>
