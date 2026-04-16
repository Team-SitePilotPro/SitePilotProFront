import { worksiteColumns } from '../../Worksites/workSite.table.columns';
import { clientColumns } from '~/components/Clients/Client.table.columns';

export const useTableColumns = () => {
  return {
    worksiteColumns,
    clientColumns
  };
};
