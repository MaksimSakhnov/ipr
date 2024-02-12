import type { ReactNode } from 'react';

export type ToggleButtonGroupProps = {
  className?: string;
  onChange: (value: never) => void;
  value?: string | number;
  designVersion?: string;
  divider?: ReactNode;
  isWithoutDivider?: boolean;
  isMultiple?: boolean;
  children?: ReactNode;
};
