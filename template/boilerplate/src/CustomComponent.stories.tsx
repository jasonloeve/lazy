import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomComponent from './CustomComponent';

/**
 * Storybook stories for CustomComponent.
 * Define different stories and variations for the component.
 */
export const customComponentName = 'CustomComponent';

export default {
  title: customComponentName,
  component: CustomComponent,
} as Meta;

const Template: Story = (args) => <CustomComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  name: customComponentName,
  // Default args here
};