import { ListItem, List } from '@/Types';

export interface RootState {
  name: string;
}

export interface RacesState {
  races: List;
  activeRace: ListItem;
}
