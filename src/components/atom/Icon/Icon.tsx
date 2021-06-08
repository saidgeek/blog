import React, { FC } from 'react';
import IconComponents from './Assets';

export type SVGProps = {
  width?: string | number;
  fill?: string;
};

export type IconProps = {
  name: keyof typeof IconComponents;
  width?: string | number;
  fill?: string;
};

const getIconComponents = (name: string): FC<SVGProps> =>
  (IconComponents as Record<string, FC<SVGProps>>)[name];

const Icon: FC<IconProps> = ({
  name = Object.keys(IconComponents)[0],
  width = 24,
  fill,
}) =>
  React.createElement(getIconComponents(name), {
    width,
    fill,
  });

export default Icon;
