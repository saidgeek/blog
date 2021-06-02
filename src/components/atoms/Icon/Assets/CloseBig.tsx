import React, { FC, memo } from 'react';
import { SVGProps } from '../Icon';

const CloseBig: FC<SVGProps> = ({
  width = 16,
  fill = '#3C3D41',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17.59 5L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41 17.59 5z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(CloseBig);
