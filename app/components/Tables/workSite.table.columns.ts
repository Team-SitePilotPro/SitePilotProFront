import type { TableColumn } from '@nuxt/ui';
import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';
import { h } from 'vue';
import { UButton, UBadge } from '#components';
import { formatDate } from '~/components/Tables/utils/dateUtils';
import type {
  WorksiteStatusEnum } from '~/components/Worksites/Types/worksiteStatusEnum';
import {
  WorksiteStatusColorMap,
  WorksiteStatusEnumMap
} from '~/components/Worksites/Types/worksiteStatusEnum';
import ActionsDropdown from '~/components/Tables/components/ActionsDropdown.vue';

export const worksiteColumns: TableColumn<WorksiteInterface>[] = [
  {
    id: 'expand',
    meta: {
      class: {
        th: 'text-center w-[5%]',
        td: 'text-center font-medium w-[5%]'
      }
    },
    cell: ({ row }) =>
      h(UButton, {
        'color': 'neutral',
        'variant': 'ghost',
        'icon': row.getIsExpanded() ? 'i-lucide-minus' : 'i-lucide-plus',
        'square': true,
        'aria-label': 'Expand',
        'onClick': () => row.toggleExpanded()
      })
  }, {
    accessorKey: 'worksiteName',
    header: 'Nom du chantier',
    meta: {
      class: {
        th: 'text-left w-[20%]',
        td: 'text-left font-medium w-[20%]'
      }
    },
    cell: ({ row }) => `${row.getValue('worksiteName')}`
  }, {
    accessorKey: 'client',
    header: 'Client',
    meta: {
      class: {
        th: 'text-left w-[20%]',
        td: 'text-left font-medium w-[20%]'
      }
    },
    cell: ({ row }) => `${row.getValue('client')}`
  }, {
    accessorKey: 'place',
    header: 'Lieu',
    meta: {
      class: {
        th: 'text-left w-[20%]',
        td: 'text-left font-medium w-[20%]'
      }
    },
    cell: ({ row }) => `${row.getValue('place')}`
  }, {
    accessorKey: 'startDate',
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return h(UButton, {
        color: 'neutral',
        variant: 'ghost',
        label: 'Date de début',
        icon: isSorted ? (isSorted === 'asc' ? 'i-lucide-arrow-up-narrow-wide' : 'i-lucide-arrow-down-wide-narrow') : 'i-lucide-arrow-up-down',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      });
    },
    meta: {
      class: {
        th: 'text-center w-[10%]',
        td: 'text-center font-medium w-[10%]'
      }
    },
    cell: ({ row }) => formatDate(row.original.startDate)

  }, {
    accessorKey: 'endDate',
    header: ({ column }) => {
      const isSorted = column.getIsSorted();

      return h(UButton, {
        color: 'neutral',
        variant: 'ghost',
        label: 'Date de fin',
        icon: isSorted ? (isSorted === 'asc' ? 'i-lucide-arrow-up-narrow-wide' : 'i-lucide-arrow-down-wide-narrow') : 'i-lucide-arrow-up-down',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      });
    },
    meta: {
      class: {
        th: 'text-center w-[10%]',
        td: 'text-center font-medium w-[10%]'
      }
    },
    cell: ({ row }) => formatDate(row.original.endDate)
  }, {
    accessorKey: 'status',
    header: 'Status',
    meta: {
      class: {
        th: 'text-center w-[10%]',
        td: 'text-center font-medium w-[10%]'
      }
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as WorksiteStatusEnum;
      return h(UBadge, {
        color: WorksiteStatusColorMap[status] ?? 'neutral',
        label: WorksiteStatusEnumMap.get(status) ?? 'Inconnu'
      });
    }
  }, {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => h(ActionsDropdown, {
      isExpanded: row.getIsExpanded(),
      onToggleExpand: () => row.toggleExpanded()
    })
  }];