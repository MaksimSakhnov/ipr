export interface IPeopleStore {
  people: IPeople[];
  getPeople: () => void;
}

export interface IFilmsStore {
  films: IFilm[];
  getFilms: () => void;
}

export interface IFilm {
  title: string;
  episode_id: number;
}
export interface IAppStore {
  darkTheme: boolean;
  toggleTheme: () => void;
  ruLanguage: boolean;
  toggleLanguage: () => void;
}

export interface IPeople {
  created: Date;
  edited: Date;
  name: string;
  birth_year: string;
}
