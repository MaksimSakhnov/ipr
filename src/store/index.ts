import { useAppStore } from './appStore';
import { usePeople } from './peopleStore';
import { IPeopleStore, IPeople } from './store.type';

export type { IPeople, IPeopleStore };
export { usePeople, useAppStore };
