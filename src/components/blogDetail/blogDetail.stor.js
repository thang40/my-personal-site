import React from "react";
import { storiesOf } from "@storybook/react";
import { BlogDetail } from "./blogDetail.comp";
import { MemoryRouter } from "react-router-dom";

storiesOf("BlogDetail", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("show simple detail", () => (
    <BlogDetail title="my title" detailMarkdown="my detail" />
  ))
  .add("show default props", () => <BlogDetail />);
