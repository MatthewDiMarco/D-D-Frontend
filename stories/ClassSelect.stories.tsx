import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassSelect from '../pages/component/ClassSelect';

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
      classIndex: 'bard',
      className: 'Bard',
      classEndpoint: '/api/classes/bard',
      classHitDie: 8
    },
    {
      classIndex: 'barbarian',
      className: 'Barbarian',
      classEndpoint: '/api/classes/barbarian',
      classHitDie: 12
    }
  ]
};