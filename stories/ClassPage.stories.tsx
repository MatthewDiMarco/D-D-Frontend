import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassPage from '../pages/component/ClassPage';

export default {
  title: "Stories/Class Page",
  component: ClassPage,
};

const Template: ComponentStory<typeof ClassPage> = (args) => <ClassPage {...args} />

export const ClassPageEmpty = Template.bind({});
ClassPageEmpty.args = {};

export const ClassPageTwoClasses = Template.bind({});
ClassPageTwoClasses.args = {
  propClassList: [
    {
      className: 'Bard',
      classEndpoint: '/api/classes/bard',
      classHitDie: 8
    },
    {
      className: 'Barbarian',
      classEndpoint: '/api/classes/barbarian',
      classHitDie: 12
    }
  ]
};