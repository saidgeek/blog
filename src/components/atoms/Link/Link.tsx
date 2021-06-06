import React, { FC } from 'react';
import styled from 'styled-components';
import Tokens from '../../../tokens';

export type LinkProps = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = styled.button`
  color: ${Tokens.color.white};
  cursor: pointer;
  font-size: 24px;
  font-variant: Light;
  border: 0;
  background: transparent;
`;

const Link: FC<LinkProps> = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default Link;
