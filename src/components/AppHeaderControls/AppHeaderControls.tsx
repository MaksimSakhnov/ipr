import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AppHeaderControlsProps } from './AppHeaderControls.type';

export function AppHeaderControls({
  currentValue,
  onChange,
  type,
}: AppHeaderControlsProps) {
  const { t } = useTranslation();
  return (
    <ToggleButtonGroup
      value={String(currentValue)}
      onChange={onChange}
      color="primary"
      exclusive
    >
      {type === 'theme' ? (
        <>
          <ToggleButton value="light" disabled={!currentValue as boolean}>
            {t('theme.light')}
          </ToggleButton>
          <ToggleButton value="dark" disabled={currentValue as boolean}>
            {t('theme.dark')}
          </ToggleButton>
        </>
      ) : (
        <>
          <ToggleButton value="ru" disabled={currentValue === 'ru'}>
            {t('language.ru')}
          </ToggleButton>
          <ToggleButton value="en" disabled={currentValue === 'en'}>
            {t('language.en')}
          </ToggleButton>
        </>
      )}
    </ToggleButtonGroup>
  );
}
