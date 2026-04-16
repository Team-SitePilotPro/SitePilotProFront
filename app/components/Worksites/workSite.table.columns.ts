import type { TableColumn } from '@nuxt/ui';
import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';

export const worksiteColumns: TableColumn<WorksiteInterface>[] = [
  {
    id: 'expand',
    header: 'Détails',
    meta: {
      class: {
        th: 'text-center w-[5%]',
        td: 'text-center font-medium w-[5%]'
      }
    }

  }, {
    accessorKey: 'worksiteName',
    header: 'Nom du chantier',
    meta: {
      class: {
        th: 'text-left w-[20%]',
        td: 'text-left font-medium w-[20%]'
      }
    }
  }, {
    accessorKey: 'client',
    header: 'Client',
    meta: {
      class: {
        th: 'text-left w-[20%]',
        td: 'text-left font-medium w-[20%]'
      }
    }
  }, {
    accessorKey: 'place',
    header: 'Lieu',
    meta: {
      class: {
        th: 'text-left w-[20%]',
        td: 'text-left font-medium w-[20%]'
      }
    }
  }, {
    id: 'startDate',
    accessorKey: 'startDate',
    meta: { class: { th: 'text-center w-[10%]', td: 'text-center font-medium w-[10%]' } }
  }, {
    id: 'endDate',
    accessorKey: 'endDate',
    meta: { class: { th: 'text-center w-[10%]', td: 'text-center font-medium w-[10%]' } }
  }, {
    accessorKey: 'status',
    header: 'Status',
    meta: {
      class: {
        th: 'text-center w-[10%]',
        td: 'text-center font-medium w-[10%]'
      }
    }
  }, {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    meta: {
      class: {
        th: 'text-center w-[10%]',
        td: 'text-center font-medium w-[10%]'
      }
    }
  }];
