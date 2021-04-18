import React from 'react';
import Workout from '../assets/images/screenshot_workout.png';
import Burger from '../assets/images/screenshot_burger.png';
import Quiz from '../assets/images/screenshot_quiz1.png';
import Password from '../assets/images/password_screenshot.png';
import Refactor from '../assets/images/refactor.png';
import DayPlanner from '../assets/images/screenshot_day_planner.png';
import Holiday from '../assets/images/screenshot_holiday_saved.png';

const Projects = () => {
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
        {/* <!-- Workout Crusher --> */}
        <figure class="col-md-6">
          <h3>Workout Logging App</h3>
          <a href="https://ancient-river-16818.herokuapp.com/" target="_blank">
            <img
              src={Workout}
              alt="Workout Crusher App Home page"
              class="img-thumbnail"
            />
          </a>
          <button class="btn-secondary" id="workoutBtn">Github Repo</button>
        </figure>
        {/* <!-- Burger App Tile --> */}
        <figure class="col-md-6">
          <h3>Burger Logging App</h3>
          <a href="https://glacial-coast-49781.herokuapp.com/" target="_blank">
            <img
              src={Burger}
              alt="Burger App Screenshot"
              class="img-thumbnail"
            />
          </a>
          <button class="btn-secondary" id="burgerBtn">Github Repo</button>
        </figure>
      </section>
      <section class="row">
        {/* <!-- Coding Quiz Tile --> */}
        <figure class="col-md-6">
          <h3>Coding Quiz</h3>
          <a href="https://ejsmith13.github.io/coding_quiz/" target="_blank">
            <img
              src={Quiz}
              alt="Coding Quiz page"
              class="img-thumbnail"
            />
          </a>
          <button class="btn-secondary" id="quizBtn">Github Repo</button>
        </figure>
        {/* <!-- Password Generator Tile --> */}
        <figure class="col-md-6">
          <h3>Password Generator</h3>
          <a href="https://ejsmith13.github.io/password-maker/" target="_blank">
            <img
              src={Password}
              alt="password generator"
              class="img-thumbnail"
            />
          </a>
          <button class="btn-secondary" id="passwordBtn">Github Repo</button>
        </figure>
      </section>
      <section class="row">
      {/* <!-- Refactor Page Tile --> */}
        <figure class="col-md-6">
          <h3>Marketing Refactor Page</h3>
          <a
            href="https://ejsmith13.github.io/horiseon_marketing_project/"
            target="_blank"
          >
            <img
              src= {Refactor}
              alt="refactor project"
              class="img-thumbnail"
            />
          </a>
          <br />
          <button class="btn-secondary" id="refactorBtn">Github Repo</button>
        </figure>
        {/* <!-- Day Planner Tile --> */}
        <figure class="col-md-6">
          <h3>Day Planner</h3>
          <a href="https://ejsmith13.github.io/day_planner/" target="_blank">
            <img
              src={DayPlanner}
              alt="Day Planner"
              class="img-thumbnail"
            />
          </a>
          <button class="btn-secondary" id="plannerBtn">Github Repo</button>
        </figure>
      </section>
      <section class="row">
        <figure class="col-md-6">
          <h3>Holiday Movie Finder</h3>
          <a
            href="https://vpatt1031.github.io/movie_roullette/"
            target="_blank"
          >
            <img
              src={Holiday}
              alt="Holiday Movie Finder App"
              class="img-thumbnail"
            />
          </a>
          <button class="btn-secondary" id="holidayBtn">Github Repo</button>
        </figure>
      </section>
    </main>
        </div>
    )
}
 
export default Projects;