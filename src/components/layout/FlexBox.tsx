import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type FlexDef = {
  flexDirection?: 'row' | 'column';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number | string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  justifyItems?:
    | 'auto'
    | 'normal'
    | 'center'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'left'
    | 'right';
  flex?: [number, number, 'auto' | number | 'initial' | 'inherit'];
};

type FlexComponentProps = {
  children: ReactNode;
  reverse?: boolean;
} & FlexDef;

const Container = styled.div<FlexDef & { reverse: boolean }>`
  display: flex;
  flex-direction: ${({ flexDirection, reverse }) =>
    `${flexDirection}${reverse ? '-reverse' : ''}`};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
`;

const FlexBox: FC<FlexComponentProps> = ({
  flexDirection = 'row',
  reverse = false,
  gap,
  flexWrap = 'nowrap',
  alignItems = 'stretch',
  flex = [0, 1, 'auto'],
  justifyContent = 'flex-start',
  justifyItems = 'auto',
  children,
}) => (
  <Container
    flexDirection={flexDirection}
    reverse={reverse}
    gap={gap}
    flexWrap={flexWrap}
    alignItems={alignItems}
    flex={flex}
    justifyContent={justifyContent}
    justifyItems={justifyItems}>
    {children}
  </Container>
);

export default FlexBox;
