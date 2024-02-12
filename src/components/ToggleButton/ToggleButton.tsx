import { FC } from 'react';
import cn from 'classnames';
import type { ToggleButtonProps } from './ToggleButton.type';
import './ToggleButton.scss';

export const ToggleButton: FC<ToggleButtonProps> = function ({
  className,
  children,
  isActive,
  isDisabled,
  value = '',
  onClick,
  designVersion,
}) {
  return (
    <button
      type="button"
      className={cn('toggle_button', className, {
        'toggle_button-active': isActive,
        [`toggle_button-design_version_${designVersion}`]:
          designVersion !== undefined,
      })}
      disabled={isDisabled}
      onClick={
        (onClick &&
          !isDisabled &&
          !isActive &&
          (() => {
            onClick(value);
          })) ||
        undefined
      }
    >
      {children}
    </button>
  );
};
