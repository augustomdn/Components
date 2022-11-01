import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,

} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Breadcrumbs = Template.bind({});

Breadcrumbs.args = {

    items: [
        
        {url: 'https://www.google.com/',title: "Home", disabled : true},
        {url: 'https://www.youtube.com/', title: "Section", disabled : false},
        {url: 'https://github.com/', title: "Contact", disabled : false}
    ]
}   


