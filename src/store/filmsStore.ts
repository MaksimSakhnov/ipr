import create from 'zustand';
import { FilmsApi } from 'services/swapi/filmsApi';
import { IFilmsStore } from './store.type';

export const useFilms = create<IFilmsStore>()((setState) => ({
  films: [],
  getFilms: async () => {
    const data = await FilmsApi.getFilms();
    setState({ films: data });
  },
}));
