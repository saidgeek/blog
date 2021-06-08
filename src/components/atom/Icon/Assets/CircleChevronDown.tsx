import React, { FC, memo } from 'react';
import { SVGProps } from '../Icon';

const CircleChevronDown: FC<SVGProps> = ({
  width = 16,
  fill = '#3C3D41',
  ...props
}) => {
  return (
    <svg width={width} viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M12 22.12c-5.523 0-10-4.478-10-10 0-5.524 4.477-10 10-10s10 4.476 10 10c-.006 5.52-4.48 9.993-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm-.05 11.5L7 10.67l1.414-1.415 3.536 3.535 3.536-3.535L16.9 10.67l-4.95 4.95z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(CircleChevronDown);
