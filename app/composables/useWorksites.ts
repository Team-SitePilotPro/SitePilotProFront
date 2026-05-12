import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';
import { worksitesData as initialData } from '~/data/worksite';

export const useWorksites = () => {
  const worksites = useState<WorksiteInterface[]>('worksites', () => [...initialData]);

  const getNextCode = (): string => {
    const year = new Date().getFullYear();
    const nums = worksites.value
      .map(w => w.code)
      .filter(c => c?.startsWith(`CH-${year}-`))
      .map(c => parseInt(c!.split('-')[2] ?? '0'))
      .filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return `CH-${year}-${String(next).padStart(3, '0')}`;
  };

  const addWorksite = (worksite: Omit<WorksiteInterface, 'id'>) => {
    const id = Math.max(0, ...worksites.value.map(w => w.id)) + 1;
    worksites.value.push({ ...worksite, id });
  };

  const updateWorksite = (updated: WorksiteInterface) => {
    const index = worksites.value.findIndex(w => w.id === updated.id);
    if (index !== -1) worksites.value[index] = { ...updated };
  };

  return { worksites, addWorksite, updateWorksite, getNextCode };
};
