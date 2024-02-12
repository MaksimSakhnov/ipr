import {
  FC,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';
import cn from 'classnames';
import { ReactComponent as DividerIcon } from 'assets/icons/divider.svg';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup.type';
import styles from './ToggleButtonGroup.module.scss';

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = function ({
  children,
  className,
  onChange,
  value,
  designVersion,
  divider = <DividerIcon />,
  isWithoutDivider,
}) {
  const childCount = Children.toArray(children).length;
  return (
    <div
      className={cn(styles.root, className, {
        [styles[`root-design_version_${designVersion}`]]:
          designVersion !== undefined,
      })}
    >
      {Children.map(children, (child, currentChildIndex) => {
        if (!isValidElement(child)) {
          return null;
        }
        const element = child as ReactElement;
        return (
          <>
            {cloneElement(element, {
              onClick: onChange,
              isActive: value === element.props.value,
              designVersion: designVersion,
            })}
            {!isWithoutDivider &&
              currentChildIndex !== childCount - 1 &&
              divider}
          </>
        );
      })}
    </div>
  );
};
