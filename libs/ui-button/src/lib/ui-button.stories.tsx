import React from 'react';
import { UIButton } from './ui-button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: UIButton,
  title: 'UIButton',
  decorators: [withKnobs],
};

export const primary = () => {
  return <UIButton>{text('children', 'Click me!')}</UIButton>;
};
