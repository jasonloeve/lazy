import React from 'react';
import { Story, Meta } from '@storybook/react';
import {{ componentName }} from './{{ componentName }}';

/**
 * Storybook stories for {{ componentName }}.
 * Define different stories and variations for the component.
 */
export const {{ componentName }}Name = '{{ componentName }}';

export default {
  title: {{ componentName }}Name,
  component: {{ componentName }},
} as Meta;

const Template: Story = (args) => <{{ componentName }} {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  name: {{ componentName }}Name,
// Default args here
};
