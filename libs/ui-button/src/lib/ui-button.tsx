import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiButtonProps {}

const StyledUiButton = styled.div`
  color: pink;
`;

export function UiButton(props: UiButtonProps) {
  return (
    <StyledUiButton>
      <h1>Welcome to ui-button!</h1>
    </StyledUiButton>
  );
}

export default UiButton;
