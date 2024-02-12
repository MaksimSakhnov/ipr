import { useTranslation } from 'react-i18next';
import AppHeaderControls from 'components/AppHeaderControls';
import ToggleButton from 'components/ToggleButton';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import type { AppHeaderProps } from './AppHeader.type';
import styles from './AppHeader.module.scss';

export function AppHeader({
  activeMenuItem,
  historyPush,
  changeTheme,
  darkTheme,
  toggleLanguage,
  currentLanguage,
}: AppHeaderProps) {
  const { t } = useTranslation();

  const MENU_CONSTANTS = [
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span>{t('menu.people')}</span>
        </div>
      ),
      value: '',
    },
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span>{t('menu.films')}</span>
        </div>
      ),
      value: 'films',
    },
  ];

  return (
    <div className={styles.app_header}>
      <div className={styles.app_header__navigation}>
        <ToggleButtonGroup
          onChange={historyPush}
          value={activeMenuItem}
          isWithoutDivider
        >
          {MENU_CONSTANTS.map((el) => (
            <ToggleButton key={el.value} value={el.value}>
              {el.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div className={styles.app_header__controls}>
        <AppHeaderControls
          currentValue={darkTheme}
          onChange={changeTheme}
          type={'theme'}
        />

        <AppHeaderControls
          currentValue={currentLanguage}
          onChange={toggleLanguage}
          type={'language'}
        />
      </div>
    </div>
  );
}
