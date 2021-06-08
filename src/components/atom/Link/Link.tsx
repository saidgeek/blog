import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../tokens';

export type LinkProps = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = styled.button`
  color: ${theme.color('muted')};
  cursor: pointer;
  font-family: ${theme.fontFamily('sans')};
  font-size: ${theme.fontSize('lg')};
  font-weight: ${theme.fontWeight('light')};
  border: ${theme.borderWidth('none')};
  background: ${theme.color('transparent')};
`;

const Link: FC<LinkProps> = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default Link;
