import React, { Component, useState } from "react";
import Workout from "../assets/images/screenshot_workout.png";
import Burger from "../assets/images/screenshot_burger.png";
import Quiz from "../assets/images/screenshot_quiz1.png";
import Password from "../assets/images/password_screenshot.png";
import DayPlanner from "../assets/images/screenshot_day_planner.png";
import Holiday from "../assets/images/screenshot_holiday_saved.png";
import Project from "../components/project";
import Rcity from "../assets/images/screenshot_rcity.png";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "RCity",
        link: "https://rcity.herokuapp.com/",
        image: Rcity,
        gh: "https://github.com/ejsmith13/city_app",
      },
      {
        title: "Workout Crusher",
        link: "https://ancient-river-16818.herokuapp.com/",
        image: Workout,
        gh: "https://github.com/ejsmith13/workout-crusher",
      },
      {
        title: "Burger Logging App",
        link: "https://glacial-coast-49781.herokuapp.com/",
        image: Burger,
        gh: "https://github.com/ejsmith13/burger_app",
      },
      {
        title: "Coding Quiz",
        link: "https://ejsmith13.github.io/coding_quiz/",
        image: Quiz,
        gh: "https://github.com/ejsmith13/coding_quiz",
      },
      {
        title: "Password Generator",
        link: "https://ejsmith13.github.io/password-maker/",
        image: Password,
        gh: "https://github.com/ejsmith13/password-maker",
      },
      {
        title: "Day Planner",
        link: "https://ejsmith13.github.io/day_planner/",
        image: DayPlanner,
        gh: "https://github.com/ejsmith13/day_planner",
      },
      {
        title: "Holiday Movie Finder",
        link: "https://vpatt1031.github.io/movie_roullette/",
        image: Holiday,
        gh: "https://github.com/vpatt1031/movie_roullette",
      },
    ],
  };
  render() {
    return (
      <div>
        <main class="container">
          <section class="row">
            <h1 class="col-md-8 font-weight-bold border-bottom border-dark">
              Portfolio
            </h1>
            <p>Click the images below to visit each site.</p>
          </section>
          <section class="row">
            <figure>
              <Project projects={this.state.projects} />
            </figure>
          </section>
        </main>
      </div>
    );
  }
}

export default Projects;
