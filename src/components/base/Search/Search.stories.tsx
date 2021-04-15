import { Story, Meta } from "@storybook/react";

import { Search, Props as SearchProps } from "./Search";

export default {
  title: "Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
};
