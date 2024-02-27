function Project({ project }) {
  return (
    <div className="row">
      <br></br>
      <div className="col-md-5">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <img
            src={project.screenshot}
            alt={project.title + " screenshot"}
            className="mobile-screenshot screenshot"
          ></img>
        </a>
        <h3 className="appname">{project.title}</h3>
        <div className="caption">
          <span>{project.date}</span>
        </div>
        {project.description.map(function (text, i) {
          return (
            <p className="project-description" key={i}>
              {text}
            </p>
          );
        })}
        <div className="actions">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : (
            <span className="private-repo">Private</span>
          )}
        </div>
      </div>
      <div className="col-md-7">
        <div className="project">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <img
              src={project.screenshot}
              alt={project.title + " screenshot"}
              className="desktop-screenshot screenshot"
            ></img>
          </a>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Project;
