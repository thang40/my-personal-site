import React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "./avatar.comp";

storiesOf("Avatar", module)
  .add("show on screen", () => <Avatar />)
  .add("with style", () => {
    const style = {
      border: "solid 1px black"
    };
    return <Avatar style={style} />;
  });
