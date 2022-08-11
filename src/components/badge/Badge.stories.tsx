import React from "react";
import { Badge } from "./Badge";
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {
    title: 'Badge',
    component: Badge,

    backgroundColor : { control: 'color'}

} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    type: 'primaryBadge'
}

export const Secondary = Template.bind({});

Secondary.args = {
    type: 'secondaryBadge'
}

export const Success = Template.bind({});

Success.args = {
    type: 'successBadge'
}

export const Info = Template.bind({});

Info.args = {
    type: 'infoBadge'
}

export const Danger = Template.bind({});

Danger.args = {
    type: 'dangerBadge'
}

export const Warning = Template.bind({});

Warning.args = {
    type: 'warningBadge'
}

export const Light = Template.bind({});

Light.args = {
    type: 'lightBadge'
}

export const Dark = Template.bind({});

Dark.args = {
    type: 'darkBadge'
}





