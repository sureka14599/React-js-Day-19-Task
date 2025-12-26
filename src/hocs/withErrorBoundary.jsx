import React from "react";

class ErrorBoundary extends React.Component {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? <p>Error!</p> : this.props.children;
  }
}

const withErrorBoundary = (Component) => (props) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

export default withErrorBoundary;
