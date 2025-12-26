const withLogger = (Component) => (props) => {
  console.log("Component Rendered");
  return <Component {...props} />;
};
export default withLogger;
