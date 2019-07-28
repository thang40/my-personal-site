import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Paginator from "../components/paginator/paginator.comp";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Paginator", module)
  .add("not show when only 1 page", () => <Paginator numOfPage={1} />)
  .add("show 1 to 5 when in first 1 to 5 page", () => (
    <Paginator
      numOfPage={10}
      curPage={2}
      pageClickCallback={page => console.log(`page ${page} clicked`)}
    />
  ));
