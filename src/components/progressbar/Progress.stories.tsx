import React from "react";
import { Progress } from "./Progress";
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {

    title: 'Progress Bar',
    component: Progress,

} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const Info = Template.bind({});

Info.args = {
    type: 'info',
}

export const Success = Template.bind({});

Success.args = {
    type: 'success'
}

export const Danger = Template.bind({});

Danger.args = {
    type: 'danger'
}

export const Warning = Template.bind({});

Warning.args = {
    type: 'warning'
}
