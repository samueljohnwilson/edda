export interface RootState {
  name: string;
}

export enum Race {
  HUMAN = 'human',
  DWARF = 'dwarf',
  ELF = 'elf',
  HALFELF = 'halfelf',
  HALFLING = 'halfling',
  FIRBOLG = 'firbolg',
}

type Races = Record<Race, { name: string }>;

export interface RacesState {
  races: Races;
  activeRace: Race;
}
