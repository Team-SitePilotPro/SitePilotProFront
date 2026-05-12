import type { AdressInterface } from '~/components/Clients/Types/adress.interface';
import type { WorksiteStatusEnum } from '~/components/Worksites/Types/worksiteStatusEnum';
import type { WorksitePriorityEnum } from '~/components/Worksites/Types/worksitePriorityEnum';

export interface WorksiteInterface {
  id: number;
  name: string;
  description?: string;
  code?: string;
  start_date?: Date;
  end_date?: Date;
  priorite?: WorksitePriorityEnum;
  statut: WorksiteStatusEnum;
  client_id: number;
  user_id: number;
  adress: AdressInterface;
  // relations optionnelles retournées par l'API
  client_name?: string;
  quote_id?: number;
  invoice_id?: number;
}
