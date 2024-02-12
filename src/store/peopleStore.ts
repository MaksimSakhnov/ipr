import create from 'zustand';
import { PeopleApi } from 'services/swapi/peopleApi';
import { IPeopleStore } from './store.type';

export const usePeople = create<IPeopleStore>()((setState) => ({
  people: [],
  getPeople: async () => {
    const data = await PeopleApi.getPeople();
    setState({
      people: data.map((el) => {
        return {
          ...el,
          edited: new Date(el.edited),
          created: new Date(el.created),
        };
      }),
    });
  },
}));
