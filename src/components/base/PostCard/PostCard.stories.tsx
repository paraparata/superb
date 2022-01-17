import { Story, Meta } from "@storybook/react";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import {
  PostCard,
  Props as PostCardProps,
  Post as PostInterface,
} from "./PostCard";

const centeredDecorator = (cb: () => StoryFnReactReturnType) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "500px" }}>{cb()}</div>
    </div>
  );
};

export default {
  title: "Post Card",
  component: PostCard,
  decorators: [(story) => centeredDecorator(story)],
} as Meta;

const defaultPropsValue: PostInterface = {
  username: "paraparata",
  nickname: "Paraparata",
  imgProfile: "https://paraparata.github.io/img/pp_400x400.jpg",
  linkProfile: "#",
  linkPost: "#",
  imgPost:
    "https://i.pinimg.com/originals/b8/fe/9c/b8fe9cb3386d82d8b2da6ec314f3a979.jpg",
  title: "Post Title",
  desc: "Post Desc",
  date: "5min ago",
};

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  post: defaultPropsValue,
};
