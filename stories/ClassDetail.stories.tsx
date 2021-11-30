import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassDetail from '../pages/component/ClassDetail';

export default {
  title: "Stories/Class Detail",
  component: ClassDetail,
};

const Template: ComponentStory<typeof ClassDetail> = (args) => <ClassDetail {...args} />

export const ClassDetailWithValues = Template.bind({});
ClassDetailWithValues.args = {
  propClassDetail: {
    className: 'Bard',
    classEndpoint: '/api/classes/bard',
    classHitDie: 8,
    classProficiencies: [
      'A', 'B'
    ],
    classStartingEquipment: [
      'A', 'B'
    ]
  }
};

export const ClassDetailEmpty = Template.bind({});
ClassDetailEmpty.args = {};