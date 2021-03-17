import React from 'react';

import styled from 'styled-components';

export interface UIButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  border: 1px solid firebrick;
  background-color: darkred;
  color: white;
  padding: 5px 10px;
`;

export function UIButton(props: UIButtonProps) {
  return <StyledButton {...props} />;
}

export default UIButton;
