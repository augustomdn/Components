import React from "react";
import { Avatar } from "./Avatar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {

    title: 'Avatar',
    component: Avatar,

    argTypes: {
        click: { action: 'clicou'}
    },

} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Square = Template.bind({});

Square.args = {
    format: 'avatarSquare'
}

export const Round = Template.bind({});

Round.args = {
    format: 'avatarRound'
}

