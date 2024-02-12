import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from 'store';
import AppHeader from 'components/AppHeader';

export function AppHeaderContainer() {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const toggleTheme = useAppStore((store) => store.toggleTheme);
  const darkTheme = useAppStore((store) => store.darkTheme);

  useEffect(() => {
    const activeMenuitem = location.pathname.split('/')[1];
    setActiveMenuItem(activeMenuitem);
  }, [location.pathname]);

  const historyPush = (value: string) => {
    navigate(`/${value}`);
  };

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
      />
    </>
  );
}
