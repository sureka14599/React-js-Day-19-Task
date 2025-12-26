const withAuth = (Component) => ({ isAuth, ...props }) =>
  isAuth ? <Component {...props} /> : <p>Not Authorized</p>;

export default withAuth;
