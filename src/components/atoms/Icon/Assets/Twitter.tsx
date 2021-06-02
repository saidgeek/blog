import React, { FC, memo } from 'react';
import { SVGProps } from '../Icon';

const Twitter: FC<SVGProps> = ({
  width = 16,
  fill = '#3C3D41',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.995 6.688a4.3 4.3 0 001.887-2.374c-.842.5-1.764.852-2.725 1.041a4.3 4.3 0 00-7.316 3.915 12.184 12.184 0 01-8.844-4.484 4.3 4.3 0 001.328 5.73 4.276 4.276 0 01-1.943-.538v.054a4.294 4.294 0 003.443 4.208 4.3 4.3 0 01-1.938.074 4.3 4.3 0 004.009 2.98 8.61 8.61 0 01-5.33 1.837c-.343 0-.685-.02-1.025-.059A12.148 12.148 0 008.12 21 12.127 12.127 0 0020.33 8.789c0-.186-.004-.371-.013-.555a8.718 8.718 0 002.142-2.222 8.58 8.58 0 01-2.464.676z"
        fill={fill}
      />
    </svg>
  );
};

export default memo(Twitter);
