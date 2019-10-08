import React from "react";
import { storiesOf } from "@storybook/react";
import { BlogCard } from "./blogCard.comp";
import { MemoryRouter } from "react-router-dom";

storiesOf("BlogCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      <div style={{ width: 300 }}>{story()}</div>
    </MemoryRouter>
  ))
  .add("With no cover image", () => <BlogCard title="hello" />)
  .add("With broken cover image", () => (
    <BlogCard title="hello" loading={false} coverImage="broken link" />
  ))
  .add("with cover image", () => (
    <BlogCard
      title="hello"
      loading={false}
      coverImage="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto"
    />
  ));
