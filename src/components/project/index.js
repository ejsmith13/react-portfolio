import React from "react";


function Project(props) {
  return (
    <div className = "row" >
      {props.projects.map((e) => {
        return (
          <figure className="col-md-6">
            <h3>{e.title}</h3>
            <a href={e.link} target="_blank" rel="noreferrer" >
              <img src={e.image} alt={e.title} className="img-thumbnail" />
            </a>
            <button className="btn-secondary" >
              <a href={ e.gh} target="_blank" rel="noreferrer" style={{ color: "white" }}>
              Github Repo
              </a>
            </button>
          </figure>
        );
      })}
    </div>
  );
}

export default Project;
