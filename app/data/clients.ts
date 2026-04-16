import type { ClientInterface } from '~/components/Clients/Types/client.interface';

export const clientsData: ClientInterface[] = [
  {
    id: 1,
    contact: 'jean',
    email: 'societeA@societeA.fr',
    phone: '0601020304',
    company: {
      name: 'Société A'
    },
    address: {
      street: 'rue du test',
      city: 'lyon',
      zipcode: 69001
    }
  },
  {
    id: 2,
    contact: 'pierre',
    email: 'societeB@societeB.fr',
    phone: '0601020304',
    company: {
      name: 'Société B'
    },
    address: {
      street: 'rue du test',
      city: 'lyon',
      zipcode: 69002
    }
  },
  {
    id: 3,
    contact: 'jacque',
    email: 'societeC@societeC.fr',
    phone: '0601020304',
    company: {
      name: 'Société C'
    },
    address: {
      street: 'rue du test',
      city: 'lyon',
      zipcode: 69003
    }
  }
];
