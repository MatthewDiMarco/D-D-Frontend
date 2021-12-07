import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassDetail from '.';

export default {
  title: "Stories/Class Detail",
  component: ClassDetail,
};

const Template: ComponentStory<typeof ClassDetail> = (args) => <ClassDetail {...args} />

export const ClassDetailWithValues = Template.bind({});
ClassDetailWithValues.args = {
  propClassIndex: 1
};

export const ClassDetailEmpty = Template.bind({});
ClassDetailEmpty.args = {};