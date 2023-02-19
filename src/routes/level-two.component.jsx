import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const LevelTwo = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const playGame = async () => {
    navigate("/game/levelthree");
  };
  return (
    <div>
      <h1 id="title" className="title">
        Arithmetic Operators
      </h1>
      <h2>Previous Question Answer: print("I want to plant a tree!")</h2>
      <h2>
        Python has a number of arithmetic operators that can allow you to do
        math with code! Some common arithmetic operators includes + and -. An
        example is 2 + 2 which outputs 4.
      </h2>
      <h2>
        Use arithmetic operators to calculate how many times the tree is watered
        if it is watered once in the morning and twice in the afternoon. Print
        your answer.
      </h2>
      <input
        type="text"
        className="code_textBox"
        placeholder="Enter Code Here"
        required
      />

      <button className="next_button" onClick={playGame}>
        Next
      </button>
    </div>
  );
};

export default LevelTwo;
