const withLoader = (Component) => ({ loading, ...props }) =>
  loading ? <p className="loader">Loading...</p> : <Component {...props} />;

export default withLoader;
