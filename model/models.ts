export interface ClassSnapshot {
  classIndex: string,
  className: string,
  classEndpoint: string,
  classHitDie: number
};

export interface Class {
  className: string,
  classEndpoint: string,
  classHitDie: number,
  classProficiencies: string[],
  classStartingEquipment: string[]
};