import { useEffect, useState } from "react";

const withData = (Component) => (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <Component data={data} {...props} />;
};

export default withData;
