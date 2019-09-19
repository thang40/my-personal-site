import React from "react";
import { storiesOf } from "@storybook/react";
import { BlogCard } from "./blogCard.comp";
import { MemoryRouter } from "react-router-dom";

storiesOf("BlogCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("show loading", () => <BlogCard title="hello" />)
  .add("show card with no cover image", () => (
    <BlogCard title="hello" loading={false} />
  ))
  .add("show card with cover image", () => (
    <BlogCard
      title="hello"
      loading={false}
      coverImage="https://hashnode.imgix.net/res/hashnode/image/upload/v1565943384102/TBuT5B3Ap.png"
    />
  ));
