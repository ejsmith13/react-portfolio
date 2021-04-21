import React from "react";


function Project(props) {
  return (
    <div>
      {props.projects.map((e) => {
        return (
          <figure className="col-md-6">
            <h3>{e.title}</h3>
            <a href={e.link} target="_blank">
              <img src={e.image} alt={e.title} className="img-thumbnail" />
            </a>
            <button className="btn-secondary" href={e.gh}>
              Github Repo
            </button>
          </figure>
        );
      })}
    </div>
  );
}

export default Project;
