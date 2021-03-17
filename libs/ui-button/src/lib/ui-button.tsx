import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UIButtonProps {}

const StyledButton = styled.button`
  border: 1px solid firebrick;
  background-color: darkred;
  color: white;
  padding: 5px 10px;
`;

export function UIButton(props: UIButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to ui-button!</h1>
    </StyledButton>
  );
}

export default UIButton;
