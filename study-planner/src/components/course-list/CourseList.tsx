import "./CourseList.css";

function CourseList() {
  const courses = [
    {
      id: 1,
      code: "COMP-3019",
      name: "Application Design and Delivery",
    },
    {
      id: 2,
      code: "COMP-3018",
      name: "Back-End Development",
    },
    {
      id: 3,
      code: "COMP-3020",
      name: "Cloud Infrastructure and Development",
    },
    {
      id: 4,
      code: "COMP-3021",
      name: "Secure Coding and Testing",
    },
  ];

  return (
    <section className="course-list">
      <h2>My Courses</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id} className="course-card">
            <h3>{course.code}</h3>
            <p>{course.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseList;