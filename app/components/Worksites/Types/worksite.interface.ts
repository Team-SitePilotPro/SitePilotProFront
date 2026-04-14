import type { WorksiteStatusEnum } from '../Types/worksiteStatusEnum';

export interface WorksiteInterface {
  id: number;
  worksiteName: string;
  client: string;
  place: string | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  status: WorksiteStatusEnum;
}
