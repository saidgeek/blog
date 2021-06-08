import React, { FC, memo } from 'react';
import { SVGProps } from '../Icon';

const CircleChevronRight: FC<SVGProps> = ({
  width = 16,
  fill = '#3C3D41',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm-1.45 13l-1.414-1.415 3.535-3.535-3.535-3.535L10.55 7.1l4.95 4.95L10.551 17h-.001z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(CircleChevronRight);
