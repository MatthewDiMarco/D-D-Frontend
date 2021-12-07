export interface ClassSnapshot {
  index: string,
  name: string,
  url: string,
  hit_die: number
};

export interface Class {
  name: string,
  url: string,
  hit_die: number,
  proficiencies: [{
    name: string
  }],
  starting_equipment: [{
    equipment: {
      name: string
    }
  }]
};