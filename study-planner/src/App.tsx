import StudyOverview from "./components/study-overview/StudyOverview";
import CourseList from "./components/course-list/CourseList";
import "./App.css";

function App() {
  return (
    <>
      <header className="app-header">
        <h1>Study Planner</h1>
        <p>Organize your studies. Stay on track. Reach your goals.</p>
      </header>

      <main className="app-main">
        <StudyOverview />
        <CourseList />
      </main>

      <footer className="app-footer">
        <p>Study Planner Team</p>
        <p>Team Members- Gunkar, Sania , Bhumika</p>
      </footer>
    </>
  );
}

export default App;