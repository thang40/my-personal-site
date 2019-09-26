import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render = () => {
    if (this.state.hasError) {
      return (
        <div>
          <h2>
            Something went wrong, press <a href="/">f5</a> or reload your
            browser
          </h2>
        </div>
      );
    }
    return this.props.children;
  };
}
