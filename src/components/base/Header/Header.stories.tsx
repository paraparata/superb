import { Story, Meta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story<any> = (args) => <Header {...args} />;

export const Default = Template.bind({});
