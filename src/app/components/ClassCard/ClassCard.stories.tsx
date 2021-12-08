import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassCard from '.';

export default {
  title: "Stories/Components/Class Card",
  component: ClassCard,
};

const Template: ComponentStory<typeof ClassCard> = (args) => <ClassCard {...args} />

export const ClassCardWithContent = Template.bind({});
ClassCardWithContent.args = {
  propClassSnapshot: {
    index: 'bard',
    name: 'Bard',
    hit_die: 8,
    url: '/api/classes/bard'
  }
};

export const ClassCardEmpty = Template.bind({});
ClassCardEmpty.args = {};

export const ClassCardSelected = Template.bind({});
ClassCardSelected.args = {
  propSelected: true
};

