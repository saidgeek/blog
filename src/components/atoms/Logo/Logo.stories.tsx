import Logo, { LogoProps, Sizes } from './Logo';
import { createTemplate } from '../../../utils/storybook';
import { Meta } from '@storybook/react';

export default {
  title: 'atoms/logo',
  component: Logo,
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    variants: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default = createTemplate<LogoProps>(Logo);

export const Variants = createTemplate<LogoProps>(Logo);

Variants.args = {
  size: Object.keys(Sizes)[0],
  variants: Object.keys(Sizes).map((size) => ({ size })),
};
