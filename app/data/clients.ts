import type { ClientInterface } from '~/components/Clients/Types/client.interface';
import { ClientTypeEnum } from '~/components/Clients/Types/clientTypeEnum';

export const clientsData: ClientInterface[] = [
  {
    id: 1,
    contact: 'Jean Dupont',
    name: 'Société A',
    email: 'societeA@societeA.fr',
    compagny: 'Société A',
    phone: '0601020304',
    type: ClientTypeEnum.Professionnel,
    siret: '12345678900011',
    tva_intra: 'FR12345678900',
    adress: {
      id: 1,
      street: '12 rue du Bâtiment',
      city: 'Lyon',
      zip_code: 69001
    }
  },
  {
    id: 2,
    contact: 'Pierre Martin',
    name: 'Société B',
    email: 'societeB@societeB.fr',
    compagny: 'Société B',
    phone: '0602030405',
    type: ClientTypeEnum.Professionnel,
    siret: '98765432100022',
    adress: {
      id: 2,
      street: '5 avenue des Travaux',
      city: 'Lyon',
      zip_code: 69002
    }
  },
  {
    id: 3,
    contact: 'Jacques Bernard',
    email: 'jacquesbernard@gmail.com',
    phone: '0603040506',
    type: ClientTypeEnum.Particulier,
    siret: '11122233300033',
    adress: {
      id: 3,
      street: '8 impasse des Roses',
      city: 'Lyon',
      zip_code: 69003
    }
  }
];
