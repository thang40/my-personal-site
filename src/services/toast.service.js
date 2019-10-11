import React from "react";
import ReactDOM from "react-dom";
import { CustomToast } from "../components";

export class ToastService {
  constructor() {
    this.toastContainerIds = [];
    this.counter = 1;
    this.toastRoot = document.createElement("div");
    this.toastPlacement = document.createElement("div");

    this.toastRoot.setAttribute("id", "toast-placement");
    this.toastRoot.setAttribute("style", "position: relative");

    this.toastPlacement.setAttribute("id", "toast-placement");
    this.toastPlacement.setAttribute(
      "style",
      "position: absolute; bottom: 0; right: 0"
    );
    document.body.appendChild(this.toastRoot);
    this.toastRoot.appendChild(this.toastPlacement);
  }

  onToastClose = id => {
    this.toastArr = this.toastArr.filter(item => item.id !== id);
    this.renderToastes();
  };

  alert = (msg, delay) => {
    const id = `toast-${this.counter++}`;
    this.toastContainerIds.push(id);
    const container = this.createContainer(id);
    ReactDOM.render(
      <CustomToast
        msg={msg}
        delay={delay}
        onClose={() => this.unmountToast(id)}
      />,
      container
    );
  };

  createContainer = toastId => {
    let toastContainer = document.createElement("div");
    toastContainer.setAttribute("id", toastId);
    this.toastPlacement.insertBefore(
      toastContainer,
      this.toastPlacement.childNodes[0]
    );
    return toastContainer;
  };

  unmountToast = id => {
    const container = document.getElementById(id);
    ReactDOM.unmountComponentAtNode(container);
    this.toastPlacement.removeChild(container);
  };
}
