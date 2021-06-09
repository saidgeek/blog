import React, { FC } from 'react';
import Picture from '../Picture';

export const Sizes = {
  md: { width: '200px', height: 'auto' },
  sm: { width: '130px', height: 'auto' },
} as const;

export type LogoProps = {
  size?: keyof typeof Sizes;
};

const Logo: FC<LogoProps> = ({ size = 'sm' }) => (
  <Picture src="/image/logo.svg" alt="saidgeek's logo" {...Sizes[size]} />
);

export default Logo;
