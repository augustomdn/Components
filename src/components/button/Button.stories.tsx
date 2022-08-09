import { ComponentStory, ComponentMeta } from "@storybook/react";
import { click } from "@testing-library/user-event/dist/click";
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
    type: 'primary',
    click: () => alert("Primary")
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Secondary',
    type: 'secondary',
    click: () => alert("Secondary")
};

export const Danger = Template.bind({});

Danger.args = {
    label: 'Danger',
    type: 'danger',
    click: () => alert("Danger")
};

export const Warning = Template.bind({});

Warning.args = {
    label: 'Warning',
    type: 'warning',
    click: () => alert("Warning")
};