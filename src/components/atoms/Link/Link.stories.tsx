import { Meta } from '@storybook/react';
import Link, { LinkProps } from './Link';
import { createTemplate } from '../../../utils/storybook';

export default {
  title: 'atoms/Link',
  component: Link,
  args: {
    children: 'Home',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Default = createTemplate<LinkProps>(Link);
