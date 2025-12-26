import { useEffect } from "react";

const withTitle = (Component, title) => (props) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return <Component {...props} />;
};

export default withTitle;
