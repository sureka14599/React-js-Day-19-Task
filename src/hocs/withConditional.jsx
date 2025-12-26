const withConditional = (Component) => ({ isVisible, ...props }) =>
  isVisible ? <Component {...props} /> : <p>Hidden</p>;

export default withConditional;
