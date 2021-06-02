import React, { FC, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  height: 20vh;

  div {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
  }
`;

const StorybookWrapper: FC<{ children: ReactNode | ReactNodeArray }> = ({
  children,
}) => (
  <Container>
    <div>{children}</div>
  </Container>
);

export default StorybookWrapper;
