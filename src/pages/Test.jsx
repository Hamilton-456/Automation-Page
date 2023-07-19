import React from "react";
import "../styles/test.css";
import { exercises } from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [optionResult, setOptionResult] = useState("");

  let exercise = exercises[index];

  function resetSelect() {
    setIndex(0);
    const sel = document.getElementsByClassName("select");
    sel.exercise.value = "";
  }

  function afterCorrectAnswer() {
    setIndex(index + 1);
    const sel = document.getElementsByClassName("select");
    sel.exercise.value = "";
  }

  function sendAnswer() {
    if (index == 0 && optionResult == "132") afterCorrectAnswer();
    else if (index == 1 && optionResult == "201") afterCorrectAnswer();
    else if (index == 2 && optionResult == "-582") afterCorrectAnswer();
    else if (index == 3 && optionResult == "194") afterCorrectAnswer();
    else if (index == 4 && optionResult == "-106")
      navigate("/Automation-Page/test/succeed");
    else resetSelect();
  }

  return (
    <section className="test">
      <h2>Automation Test</h2>
      <div className="card_automation">
        <h3>
          Here you have to automate 5 exercise, faill? you'll go back to the
          first one
        </h3>
        <span>
          {index + 1} of {exercises.length}
        </span>
      </div>
      <div className="exercise_card">
        <h3>Solve the next exercise</h3>
        <span className="exercise">{exercise.exercise}</span>

        <select
          className="select"
          name="exercise"
          id="selector"
          onChange={(e) => setOptionResult(e.target.value)}
        >
          <option value=""></option>
          {exercise.results.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button onClick={sendAnswer}>Send</button>
    </section>
  );
}
