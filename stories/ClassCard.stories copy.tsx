import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassCard from './ClassCard';

export default {
  title: "Stories/Class Page",
  component: ClassCard,
};

const Template: ComponentStory<typeof ClassCard> = (args) => <ClassCard {...args} />

export const ClassCardComponent = Template.bind({});
ClassCardComponent.args = {};