import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassCard from '../pages/component/ClassCard';

export default {
  title: "Stories/Class Card",
  component: ClassCard,
};

const Template: ComponentStory<typeof ClassCard> = (args) => <ClassCard {...args} />

export const ClassCardEmpty = Template.bind({});
ClassCardEmpty.args = {};

export const ClassCardWithContent = Template.bind({});
ClassCardWithContent.args = {
  propClassName: 'bard',
  propClassHitDie: 8,
  propClassEndpoint: '/api/classes/bard'
};