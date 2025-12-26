import "./styles/hoc.css";

import TaskTitle from "./components/TaskTitle";

import withLogger from "./hocs/withLogger";
import withStyle from "./hocs/withStyle";
import withConditional from "./hocs/withConditional";
import withAuth from "./hocs/withAuth";
import withLoader from "./hocs/withLoader";
import withLifecycle from "./hocs/withLifecycle";
import withData from "./hocs/withData";
import withMouse from "./hocs/withMouse";
import withErrorBoundary from "./hocs/withErrorBoundary";
import withTitle from "./hocs/withTitle";

import Task3 from "./components/Task3_Props";
import Task9 from "./components/Task9_Data";
import Task10 from "./components/Task10_Mouse";
import Task13 from "./components/Task13_Combine";

/* Task Components */
const Task2 = withLogger(() => <p>Component Rendered Logged</p>);
const Task4 = withStyle(() => <p>Styled Component</p>);
const Task5 = withConditional(() => <p>Condition Met</p>);
const Task6 = withAuth(() => <p>User Authenticated</p>);
const Task7 = withLoader(() => <p>Data Loaded</p>);
const Task8 = withLifecycle(() => <p>Lifecycle Logs</p>);
const Task12 = withTitle(() => <p>Title Updated</p>, "Day 19 – HOCs");

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 19 – Higher Order Components</h1>

      {/* TASK 1 */}
      <TaskTitle title="Task 1 – Introduction to HOCs" />
      <p>
        Higher Order Components are functions that take a component
        and return a new enhanced component for reusability.
      </p>

      {/* TASK 2 */}
      <TaskTitle title="Task 2 – Basic Logger HOC" />
      <Task2 />

      {/* TASK 3 */}
      <TaskTitle title="Task 3 – Props Forwarding" />
      <Task3 name="Sureka" />

      {/* TASK 4 */}
      <TaskTitle title="Task 4 – Style Wrapper HOC" />
      <Task4 />

      {/* TASK 5 */}
      <TaskTitle title="Task 5 – Conditional Rendering HOC" />
      <Task5 isVisible={true} />

      {/* TASK 6 */}
      <TaskTitle title="Task 6 – Authentication HOC" />
      <Task6 isAuth={true} />

      {/* TASK 7 */}
      <TaskTitle title="Task 7 – Loading Spinner HOC" />
      <Task7 loading={false} />

      {/* TASK 8 */}
      <TaskTitle title="Task 8 – Lifecycle Logging HOC" />
      <Task8 />

      {/* TASK 9 */}
      <TaskTitle title="Task 9 – Data Fetching HOC" />
      {withData(Task9)()}

      {/* TASK 10 */}
      <TaskTitle title="Task 10 – Mouse Hover Tracker HOC" />
      {withMouse(Task10)()}

      {/* TASK 11 */}
      <TaskTitle title="Task 11 – Error Boundary HOC" />
      {withErrorBoundary(() => {
        throw new Error("Test Error");
      })()}

      {/* TASK 12 */}
      <TaskTitle title="Task 12 – Title Update HOC" />
      <Task12 />

      {/* TASK 13 */}
      <TaskTitle title="Task 13 – Multiple HOCs Combined" />
      <Task13 isAuth={true} />
    </div>
  );
}
