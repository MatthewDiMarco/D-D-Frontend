import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassPage from './ClassPage';

export default {
  title: "Stories/Class Page",
  component: ClassPage,
};

const Template: ComponentStory<typeof ClassPage> = (args) => <ClassPage {...args} />

export const ClassPageComponent = Template.bind({});
ClassPageComponent.args = {};