import withLogger from "../hocs/withLogger";
import withStyle from "../hocs/withStyle";
import withAuth from "../hocs/withAuth";

const Task13 = () => {
  return <p>Multiple HOCs Applied</p>;
};

export default withAuth(withStyle(withLogger(Task13)));
