function CourseCard(props) {
  return (
    <div className="card">
      <h2 className="titulo">Titulo: {props.titulo}</h2>
      <div id="flex-box">
        <img src="./logo512.png" alt="logo" />
        <p>{props.descripcion}</p>
      </div>
      <div className="btn-box">
        <button>Inscribete ya!</button>
      </div>
    </div>
  );
}

export default CourseCard;
