export enum WorksiteStatusEnum {
  All = 'all',
  ToDo = 'to_do',
  InProgress = 'in_progress',
  Pending = 'pending',
  Finished = 'finished'
}

export const WorksiteStatusEnumMap = new Map<
  WorksiteStatusEnum,
  string
>([
  [WorksiteStatusEnum.All, 'Tout'],
  [WorksiteStatusEnum.ToDo, 'A faire'],
  [WorksiteStatusEnum.InProgress, 'En cours'],
  [WorksiteStatusEnum.Pending, 'En attente'],
  [WorksiteStatusEnum.Finished, 'Terminé']
]);

export type BadgeColor
  = 'neutral'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning';

export const WorksiteStatusColorMap: Record<WorksiteStatusEnum, BadgeColor> = {
  [WorksiteStatusEnum.All]: 'neutral',
  [WorksiteStatusEnum.ToDo]: 'info',
  [WorksiteStatusEnum.InProgress]: 'warning',
  [WorksiteStatusEnum.Pending]: 'neutral',
  [WorksiteStatusEnum.Finished]: 'success',
};
