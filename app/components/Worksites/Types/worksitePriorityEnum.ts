export enum WorksitePriorityEnum {
  Basse = 'basse',
  Moyenne = 'moyenne',
  Haute = 'haute'
}

export const WorksitePriorityEnumMap = new Map<WorksitePriorityEnum, string>([
  [WorksitePriorityEnum.Basse, 'Basse'],
  [WorksitePriorityEnum.Moyenne, 'Moyenne'],
  [WorksitePriorityEnum.Haute, 'Haute']
]);

export type PriorityColor = 'neutral' | 'info' | 'warning' | 'error';

export const WorksitePriorityColorMap: Record<WorksitePriorityEnum, PriorityColor> = {
  [WorksitePriorityEnum.Basse]: 'info',
  [WorksitePriorityEnum.Moyenne]: 'warning',
  [WorksitePriorityEnum.Haute]: 'error'
};
