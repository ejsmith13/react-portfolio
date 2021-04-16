import React from "react";

const Project = (props) => {
  return (
    <div>
      {props.projects.map((e) => {
        <figure class="col-md-6">
          <h3>{e.title}</h3>
          <a href={e.link} target="_blank">
            <img src={e.image} alt={e.title} class="img-thumbnail" />
          </a>
          <button class="btn-secondary" id="workoutBtn">
            Github Repo
          </button>
        </figure>;
      })}
    </div>
  );
};

export default Project;
