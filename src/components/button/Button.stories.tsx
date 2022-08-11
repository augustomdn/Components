import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: 'Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    type: 'primaryButton',
    click: () => alert("Primary")
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Secondary',
    type: 'secondaryButton',
    click: () => alert("Secondary")
};

export const Danger = Template.bind({});

Danger.args = {
    label: 'Danger',
    type: 'dangerButton',
    click: () => alert("Danger")
};

export const Warning = Template.bind({});

Warning.args = {
    label: 'Warning',
    type: 'warningButton',
    click: () => alert("Warning")
};