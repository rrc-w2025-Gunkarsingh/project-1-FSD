function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Complete React Lab",
      course: "Front-End Development",
    },
    {
      id: 2,
      title: "Study for Database Quiz",
      course: "Database Development",
    },
    {
      id: 3,
      title: "Finish Sprint 1 Project",
      course: "Front-End Development",
    },
    {
      id: 4,
      title: "Review DevOps Notes",
      course: "DevOps",
    },
  ];

  return (
    <section className="task-list">
      <h2>Study Tasks</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.course}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;