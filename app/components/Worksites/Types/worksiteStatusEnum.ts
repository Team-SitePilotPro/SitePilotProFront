export enum WorksiteStatusEnum {
  All = 'all',
  EnAttente = 'en_attente',
  EnCours = 'en_cours',
  Termine = 'termine',
  Annule = 'annule'
}

export const WorksiteStatusEnumMap = new Map<WorksiteStatusEnum, string>([
  [WorksiteStatusEnum.All, 'Tout'],
  [WorksiteStatusEnum.EnAttente, 'En attente'],
  [WorksiteStatusEnum.EnCours, 'En cours'],
  [WorksiteStatusEnum.Termine, 'Terminé'],
  [WorksiteStatusEnum.Annule, 'Annulé']
]);

export type BadgeColor =
  | 'neutral'
  | 'error'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning';

export const WorksiteStatusColorMap: Record<WorksiteStatusEnum, BadgeColor> = {
  [WorksiteStatusEnum.All]: 'neutral',
  [WorksiteStatusEnum.EnAttente]: 'neutral',
  [WorksiteStatusEnum.EnCours]: 'warning',
  [WorksiteStatusEnum.Termine]: 'success',
  [WorksiteStatusEnum.Annule]: 'error'
};
