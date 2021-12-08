import React from 'react';
import { ComponentStory } from '@storybook/react';

import ClassDetail from '.';

export default {
  title: "Stories/Components/Class Detail",
  component: ClassDetail,
};

const Template: ComponentStory<typeof ClassDetail> = (args) => <ClassDetail {...args} />

export const ClassDetailWithValues = Template.bind({});
ClassDetailWithValues.args = {
  classDetail: {
    name: "Bard",
    url: "/api/classes/bard",
    hit_die: 8,
    proficiencies: [
      {
        name: "Medium Armor"
      },
      {
        name: "Light Armor"
      },
      {
        name: "Shields"
      },
      {
        name: "Simple Weapons"
      },
      {
        name: "Martial Weapons"
      },
      {
        name: "Saving Throw: STR"
      },
      {
        name: "Saving Throw: CON"
      }
    ],
    starting_equipment: [
      {
        equipment: {
          name: "Explorer's Pack"
        }
      },
      {
        equipment: {
          name: "Javelin"
        }
      },
    ]
  }
};

export const ClassDetailOverflow = Template.bind({});
ClassDetailOverflow.args = {
  classDetail: {
    name: "Bard",
    url: "/api/classes/bard",
    hit_die: 8,
    proficiencies: [
      {
        name: "Medium Armor"
      },
      {
        name: "Light Armor"
      },
      {
        name: "Shields"
      },
      {
        name: "Simple Weapons"
      },
      {
        name: "Martial Weapons"
      },
      {
        name: "Saving Throw: STR"
      },
      {
        name: "Saving Throw: CON"
      },
      {
        name: "Medium Armor"
      },
      {
        name: "Light Armor"
      },
      {
        name: "Shields"
      },
      {
        name: "Simple Weapons"
      },
      {
        name: "Martial Weapons"
      },
      {
        name: "Saving Throw: STR"
      },
      {
        name: "Saving Throw: CON"
      }
    ],
    starting_equipment: [
      {
        equipment: {
          name: "Explorer's Pack"
        }
      },
      {
        equipment: {
          name: "Javelin"
        }
      },
      {
        equipment: {
          name: "Explorer's Pack"
        }
      },
      {
        equipment: {
          name: "Javelin"
        }
      },
      {
        equipment: {
          name: "Explorer's Pack"
        }
      },
      {
        equipment: {
          name: "Javelin"
        }
      },
      {
        equipment: {
          name: "Explorer's Pack"
        }
      },
      {
        equipment: {
          name: "Javelin"
        }
      },
    ]
  }
};

export const ClassDetailEmpty = Template.bind({});
ClassDetailEmpty.args = {
  customTitle: "No Class Selected"
};