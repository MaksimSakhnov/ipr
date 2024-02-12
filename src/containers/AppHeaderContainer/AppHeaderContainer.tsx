import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import AppHeader from 'components/AppHeader';
import { useAppStore } from 'store';

export function AppHeaderContainer() {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const toggleTheme = useAppStore((store) => store.toggleTheme);
  const darkTheme = useAppStore((store) => store.darkTheme);

  const historyPush = (value: string) => {
    navigate(`/${value}`);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const activeMenuitem = location.pathname.split('/')[1];
    setActiveMenuItem(activeMenuitem);
  }, [location.pathname]);

  function changeTheme() {
    if (!darkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    toggleTheme();
  }

  return (
    <>
      <AppHeader
        activeMenuItem={activeMenuItem}
        historyPush={historyPush}
        changeTheme={changeTheme}
        darkTheme={darkTheme}
        toggleLanguage={toggleLanguage}
        currentLanguage={i18n.language}
      />
    </>
  );
}
