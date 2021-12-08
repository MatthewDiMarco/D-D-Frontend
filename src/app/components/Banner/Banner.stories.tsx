import React from 'react';
import { ComponentStory } from '@storybook/react';

import Banner from '.';

export default {
  title: "Stories/Components/Banner",
  component: Banner,
};

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const BannerComponent = Template.bind({});
BannerComponent.args = {};