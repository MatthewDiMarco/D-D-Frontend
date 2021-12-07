import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassSelect from '.';

export default {
  title: "Stories/Class Select",
  component: ClassSelect,
};

const Template: ComponentStory<typeof ClassSelect> = (args) => <ClassSelect {...args} />

export const ClassSelectEmpty = Template.bind({});
ClassSelectEmpty.args = {propClassList: []};

export const ClassSelectTwoClasses = Template.bind({});
ClassSelectTwoClasses.args = {
  propClassList: [
    {
      index: 'bard',
      name: 'Bard',
      url: '/api/classes/bard',
      hit_die: 8
    },
    {
      index: 'barbarian',
      name: 'Barbarian',
      url: '/api/classes/barbarian',
      hit_die: 12
    }
  ]
};