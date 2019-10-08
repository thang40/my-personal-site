import { configure, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import "bootstrap/dist/css/bootstrap.min.css";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.(js|mdx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

configure(loadStories, module);
