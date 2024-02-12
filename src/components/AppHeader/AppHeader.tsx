import ToggleButton from 'components/ToggleButton';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import AppHeaderControls from 'components/AppHeaderControls';
import { AppHeaderProps } from './AppHeader.type';
import { MENU_CONSTANTS } from './AppHeader.constants';
import styles from './AppHeader.module.scss';

export function AppHeader({
  activeMenuItem,
  historyPush,
  changeTheme,
  darkTheme,
}: AppHeaderProps) {
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
      </div>
    </div>
  );
}
