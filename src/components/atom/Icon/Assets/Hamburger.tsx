import React, { FC, memo } from 'react';
import { SVGProps } from '../Icon';

const Hamburger: FC<SVGProps> = ({
  width = 16,
  fill = '#3C3D41',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z" fill={fill} />
    </svg>
  );
};

export default memo(Hamburger);
