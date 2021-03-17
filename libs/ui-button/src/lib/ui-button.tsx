import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UIButtonProps {}

const StyledButton = styled.div`
  color: pink;
`;

export function UIButton(props: UIButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to ui-button!</h1>
    </StyledButton>
  );
}

export default UIButton;
