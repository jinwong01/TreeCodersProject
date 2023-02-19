import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";
import "./game.css";
const LevelOne = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const level = 1;
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/game/leveltwo");
  }, [user, loading]);

  const playGame = async () => {
    navigate("/game/leveltwo");
  };

  return (
    <div>
      <h1 id="title" className="title">
        Print Statements
      </h1>
      <h2 className="description">
        A print statement takes an input that you give the computer and displays
        the message to the screen!
      </h2>
      <h2 className="example">
        An example of a print statement is as follows: print("Hello World!")
        which ouputs Hello World!
      </h2>
      <h2 className="assignment">
        Now to grow a tree we first need a sapling. Print "I want to plant a
        tree!" to obtain your tree.
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

export default LevelOne;
