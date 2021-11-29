import React from 'react';
import { ComponentStory } from '@storybook/react';

import Banner from './Banner';

export default {
  title: "Stories/Banner",
  component: Banner,
};

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

// Story #1: standard Banner component
export const BannerComponent = Template.bind({});
BannerComponent.args = {};

// Story #2: another rendition if the Banner with different imports/props
// ...