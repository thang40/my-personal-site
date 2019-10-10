import { configure } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";

configure(require.context("../src", true, /\.stories\.js$/), module);
