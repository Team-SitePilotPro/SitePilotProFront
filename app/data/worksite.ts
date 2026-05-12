import type { WorksiteInterface } from '~/components/Worksites/Types/worksite.interface';
import { WorksiteStatusEnum } from '~/components/Worksites/Types/worksiteStatusEnum';
import { WorksitePriorityEnum } from '~/components/Worksites/Types/worksitePriorityEnum';

export const worksitesData: WorksiteInterface[] = [
  {
    id: 1,
    name: 'Rénovation façade immeuble',
    code: 'CH-2025-001',
    description: 'Ravalement complet de la façade nord et sud',
    start_date: new Date(2025, 10, 1),
    end_date: undefined,
    priorite: WorksitePriorityEnum.Haute,
    statut: WorksiteStatusEnum.EnCours,
    client_id: 1,
    client_name: 'Société A',
    user_id: 1,
    adress: { id: 1, street: '12 rue du Bâtiment', city: 'Lyon', zip_code: 69001 }
  },
  {
    id: 2,
    name: 'Extension maison individuelle',
    code: 'CH-2025-002',
    start_date: new Date(2025, 10, 1),
    end_date: undefined,
    priorite: WorksitePriorityEnum.Moyenne,
    statut: WorksiteStatusEnum.EnCours,
    client_id: 2,
    client_name: 'Pierre Martin',
    user_id: 1,
    adress: { id: 2, street: '5 avenue des Travaux', city: 'Lyon', zip_code: 69002 }
  },
  {
    id: 3,
    name: 'Réfection toiture',
    code: 'CH-2025-003',
    description: 'Remplacement toiture complète tuiles canal',
    start_date: new Date(2025, 3, 1),
    end_date: new Date(2025, 9, 15),
    priorite: WorksitePriorityEnum.Moyenne,
    statut: WorksiteStatusEnum.Termine,
    client_id: 3,
    client_name: 'Jacques Bernard',
    user_id: 1,
    adress: { id: 3, street: '8 impasse des Roses', city: 'Lyon', zip_code: 69003 }
  },
  {
    id: 4,
    name: 'Construction garage',
    code: 'CH-2025-004',
    priorite: WorksitePriorityEnum.Basse,
    statut: WorksiteStatusEnum.EnAttente,
    client_id: 2,
    client_name: 'Société B',
    user_id: 1,
    adress: { id: 4, street: '22 rue des Artisans', city: 'Villeurbanne', zip_code: 69100 }
  },
  {
    id: 5,
    name: 'Pose carrelage salle de bain',
    code: 'CH-2024-018',
    start_date: new Date(2024, 10, 1),
    priorite: WorksitePriorityEnum.Haute,
    statut: WorksiteStatusEnum.Annule,
    client_id: 1,
    client_name: 'Jean Dupont',
    user_id: 1,
    adress: { id: 5, street: '3 rue de la Paix', city: 'Bron', zip_code: 69500 }
  }
];
