'use client';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const ButtonWithRef: ForwardRefRenderFunction<
  HTMLAnchorElement & HTMLButtonElement,
  ButtonProps
> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    color = 'tertiary',
    ...props
  },
  ref
) => (
  <S.Whapper
    ref={ref}
    size={size}
    color={color}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Whapper>
);

export const Button = forwardRef(ButtonWithRef);
