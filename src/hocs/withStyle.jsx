const withStyle = (Component) => (props) => (
  <div className="box">
    <Component {...props} />
  </div>
);
export default withStyle;
