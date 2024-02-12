export interface IPeopleStore {
  people: IPeople[];
  isLoading: boolean;
  getPeople: () => void;
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
