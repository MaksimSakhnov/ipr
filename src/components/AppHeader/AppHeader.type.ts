export interface AppHeaderProps {
  activeMenuItem: string;
  historyPush: (value: string) => void;
  changeTheme: () => void;
  darkTheme: boolean;
  toggleLanguage: () => void;
  currentLanguage: string;
}
