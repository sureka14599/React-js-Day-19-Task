const Task9 = ({ data }) => (
  <ul>
    {data.map((u) => (
      <li key={u.id}>{u.name}</li>
    ))}
  </ul>
);
export default Task9;
