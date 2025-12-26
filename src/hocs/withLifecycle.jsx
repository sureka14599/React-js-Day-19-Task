import { useEffect } from "react";

const withLifecycle = (Component) => (props) => {
  useEffect(() => {
    console.log("Mounted");
    return () => console.log("Unmounted");
  }, []);
  return <Component {...props} />;
};

export default withLifecycle;
