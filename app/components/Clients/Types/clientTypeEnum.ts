export enum ClientTypeEnum {
  Particulier = 'particulier',
  Professionnel = 'professionnel'
}

export const ClientTypeEnumMap = new Map<ClientTypeEnum, string>([
  [ClientTypeEnum.Particulier, 'Particulier'],
  [ClientTypeEnum.Professionnel, 'Professionnel']
]);
