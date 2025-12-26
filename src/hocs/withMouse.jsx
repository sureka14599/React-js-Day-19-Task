import { useState } from "react";

const withMouse = (Component) => (props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <Component pos={pos} {...props} />
    </div>
  );
};

export default withMouse;
