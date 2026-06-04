import type { AdressInterface } from '~/components/Clients/Types/adress.interface';
import type { ClientTypeEnum } from '~/components/Clients/Types/clientTypeEnum';

export interface ClientInterface {
  id: number;
  contact: string;
  name?: string;
  email: string;
  compagny?: string;
  phone: string;
  type: ClientTypeEnum;
  siret: string;
  tva_intra?: string;
  adress: AdressInterface;
  // V2
  notes?: string;
  source?: string;
}
