import React, { FC } from 'react';

export type PictureProps = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

const Picture: FC<PictureProps> = ({
  src,
  alt,
  width = '100px',
  height = '100px',
}) => (
  <img
    src={src}
    alt={alt}
    style={{
      width,
      height,
    }}
  />
);

export default Picture;
