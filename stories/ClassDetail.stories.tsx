import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassDetail from './ClassDetail';

export default {
  title: "Stories/Class Detail",
  component: ClassDetail,
};

const Template: ComponentStory<typeof ClassDetail> = (args) => <ClassDetail {...args} />

export const ClassDetailComponent = Template.bind({});
ClassDetailComponent.args = {};