import type { TableColumn } from '@nuxt/ui';
import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';

export const worksiteColumns: TableColumn<WorksiteInterface>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
    meta: { class: { th: 'text-left w-[10%]', td: 'text-left font-medium w-[10%]' } }
  },
  {
    accessorKey: 'name',
    header: 'Nom du chantier',
    meta: { class: { th: 'text-left w-[20%]', td: 'text-left font-medium w-[20%]' } }
  },
  {
    id: 'clientName',
    accessorFn: (row) => row.client_name ?? '',
    header: 'Client',
    meta: { class: { th: 'text-left w-[15%]', td: 'text-left font-medium w-[15%]' } }
  },
  {
    id: 'ville',
    accessorFn: (row) => `${row.adress.city} (${row.adress.zip_code})`,
    header: 'Ville',
    meta: { class: { th: 'text-left w-[10%]', td: 'text-left font-medium w-[10%]' } }
  },
  {
    id: 'startDate',
    accessorFn: (row) => row.start_date,
    meta: { class: { th: 'text-center w-[10%]', td: 'text-center font-medium w-[10%]' } }
  },
  {
    id: 'endDate',
    accessorFn: (row) => row.end_date,
    meta: { class: { th: 'text-center w-[10%]', td: 'text-center font-medium w-[10%]' } }
  },
  {
    id: 'priorite',
    accessorFn: (row) => row.priorite,
    header: 'Priorité',
    meta: { class: { th: 'text-center w-[8%]', td: 'text-center font-medium w-[8%]' } }
  },
  {
    id: 'statut',
    accessorFn: (row) => row.statut,
    header: 'Statut',
    meta: { class: { th: 'text-center w-[10%]', td: 'text-center font-medium w-[10%]' } }
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    meta: { class: { th: 'text-center w-[7%]', td: 'text-center font-medium w-[7%]' } }
  }
];
