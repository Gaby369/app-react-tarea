import "./App.css";
import CourseCard from "./Components/CourseCard";
function App() {
  return (
    <div>
      <CourseCard titulo="Curso de React" descripcion="Descripcion del curso" />
      <CourseCard titulo="Curso de React" descripcion="Descripcion del curso" />
      <CourseCard
        titulo="Curso de JavaScript"
        descripcion="Descripcion del curso"
      />
    </div>
  );
}

export default App;
