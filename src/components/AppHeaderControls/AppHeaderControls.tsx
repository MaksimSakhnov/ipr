import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AppHeaderControlsProps } from './AppHeaderControls.type';

export function AppHeaderControls({
  currentValue,
  onChange,
  type,
}: AppHeaderControlsProps) {
  return (
    <ToggleButtonGroup
      value={String(currentValue)}
      onChange={onChange}
      color="primary"
      exclusive
    >
      {type === 'theme' ? (
        <>
          <ToggleButton value="light" disabled={!currentValue}>
            Light
          </ToggleButton>
          <ToggleButton value="dark" disabled={currentValue}>
            Dark
          </ToggleButton>
        </>
      ) : null}
    </ToggleButtonGroup>
  );
}
