import create from 'zustand';
import { IAppStore } from './store.type';

export const useAppStore = create<IAppStore>()((setState) => ({
  darkTheme: false,
  toggleTheme: () => setState((state) => ({ darkTheme: !state.darkTheme })),
  ruLanguage: true,
  toggleLanguage: () =>
    setState((state) => ({ ruLanguage: !state.ruLanguage })),
}));
