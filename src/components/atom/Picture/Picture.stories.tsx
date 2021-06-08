import Picture, { PictureProps } from './Picture';
import { createTemplate } from '../../../utils/storybook';

export default {
  title: 'Atom/Picture',
  component: Picture,
};

export const Default = createTemplate<PictureProps>(Picture);

Default.args = {
  src: '/image/logo.svg',
};
