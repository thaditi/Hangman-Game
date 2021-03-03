import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Hint from "./components/Hint";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show } from "./helpers";

import "./App.css";

const words = [
  "consider",
  "minute",
  "accord",
  "evident",
  "practice",
  "intend",
  "concern",
  "commit",
  "issue",
  "approach",
  "establish",
  "utter",
  "conduct",
  "engage",
  "obtain",
  "scarce",
  "policy",
  "straight",
  "stock",
  "apparent",
  "property",
  "fancy",
  "concept",
  "court",
  "appoint",
  "passage",
  "vain",
  "instance",
  "coast",
  "project",
  "commission",
  "constant",
  "circumstances",
  "level",
  "affect",
  "appeal",
  "labor",
  "entertain",
  "knight",
  "reflect",
  "novel",
  "majority",
  "scheme",
  "attitude",
  "inclined",
  "boast",
  "steep",
  "elaborate",
  "sob",
  "jet",
];
const hints = [
  "deem to be",
  "infinitely or immeasurably small",
  "concurrence of opinion",
  "clearly revealed to the mind or the senses or judgment",
  "a customary way of operation or behavior",
  "have in mind as a purpose",
  "something that interests you because it is important",
  "perform an act, usually with a negative connotation",
  "some situation or event that is thought about",
  "move towards",
  "set up or found",
  "without qualification",
  "direct the course of; manage or control",
  "consume all of one's attention or time",
  "come into possession of",
  "deficient in quantity or number compared with the demand",
  "a plan of action adopted by an individual or social group",
  "successive, without a break",
  "capital raised by a corporation through the issue of shares",
  "clearly revealed to the mind or the senses or judgment",
  "a basic or essential attribute shared by members of a class",
  "imagine; conceive of; see in one's mind",
  "an abstract or general idea inferred from specific instances",
  "an assembly to conduct judicial business",
  "assign a duty, responsibility, or obligation to",
  "a section of text, particularly a section of medium length",
  "unproductive of success",
  "an occurrence of something",
  "the shore of a sea or ocean",
  "a planned undertaking",
  "a special group delegated to consider some matter",
  "a quantity that does not vary",
  "one's overall condition in life",
  "a relative position or degree of value in a graded group",
  "have an influence upon",
  "be attractive to",
  "any piece of work that is undertaken or attempted",
  "provide amusement for",
  "a person of noble birth trained to arms and chivalry",
  "show an image of",
  "an extended fictional work in prose",
  "more than half of the votes in an election",
  "an elaborate and systematic plan of action",
  "a complex mental state involving beliefs and feelings",
  "at an angle to the horizontal or vertical position",
  "talk about oneself with excessive pride or self-regard",
  "having a sharp inclination",
  "marked by complexity and richness of detail",
  "weep convulsively",
  "an airplane powered by gas turbines",
];
let x = Math.floor(Math.random() * words.length);
let selectedWord = words[x];
let selectedHint = hints[x];
function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    selectedHint = hints[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Hint selectedHint={selectedHint} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
