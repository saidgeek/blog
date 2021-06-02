import { Meta } from '@storybook/react';
import Icon, { IconProps } from './Icon';
import IconComponents from './Assets';
import { createTemplate } from '../../../utils/storybook';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: Object.keys(IconComponents),
      control: {
        type: 'select',
        labels: Object.keys(IconComponents).reduce(
          (prev: Record<string, string>, curr) => {
            prev[curr] = curr.replace(/([a-z])(?=[A-Z])/g, '$1 ').toLowerCase();
            return prev;
          },
          {}
        ),
      },
    },
    width: {
      options: [16, 24, 36, 48],
      control: {
        type: 'select',
      },
    },
    fill: {
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

export const Default = createTemplate<IconProps>(Icon);
export const Names = createTemplate<IconProps>(Icon);
export const Sizes = createTemplate<IconProps>(Icon);

Default.args = {
  name: Object.keys(IconComponents)[0],
};

Names.args = {
  variants: Object.keys(IconComponents).map((name) => ({ name })),
};

Sizes.args = {
  name: Object.keys(IconComponents)[0],
  variants: [16, 24, 36, 48].map((width) => ({ width })),
};
