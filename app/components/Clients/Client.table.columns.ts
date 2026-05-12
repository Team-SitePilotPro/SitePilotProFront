import type { TableColumn } from '@nuxt/ui';
import type { ClientInterface } from '~/components/Clients/Types/client.interface';

export const clientColumns: TableColumn<ClientInterface>[] = [
  {
    id: 'expand',
    header: 'Détails',
    meta: { class: { th: 'text-center w-[5%]', td: 'text-center font-medium w-[5%]' } }
  },
  {
    accessorKey: 'compagny',
    header: 'Société',
    meta: { class: { th: 'text-left w-[15%]', td: 'text-left font-medium w-[15%]' } }
  },
  {
    accessorKey: 'contact',
    header: 'Contact',
    meta: { class: { th: 'text-left w-[15%]', td: 'text-left font-medium w-[15%]' } }
  },
  {
    accessorKey: 'type',
    header: 'Type',
    meta: { class: { th: 'text-center w-[10%]', td: 'text-center font-medium w-[10%]' } }
  },
  {
    accessorKey: 'siret',
    header: 'SIRET',
    meta: { class: { th: 'text-left w-[15%]', td: 'text-left font-medium w-[15%]' } }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    meta: { class: { th: 'text-left w-[15%]', td: 'text-left font-medium w-[15%]' } }
  },
  {
    accessorKey: 'phone',
    header: 'Téléphone',
    meta: { class: { th: 'text-left w-[10%]', td: 'text-left font-medium w-[10%]' } }
  },
  {
    accessorKey: 'adress',
    header: 'Ville',
    meta: { class: { th: 'text-left w-[10%]', td: 'text-left font-medium w-[10%]' } }
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    meta: { class: { th: 'text-center w-[5%]', td: 'text-center font-medium w-[5%]' } }
  }
];
