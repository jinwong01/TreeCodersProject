import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const LevelThree = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const playGame = async () => {
    navigate("/game/playagain");
  };
  return (
    <div>
      <h1 id="title" className="title">
        If Statements
      </h1>
      <h2>Previous Question Answer: print(1+2)</h2>
      <h2>
        Sometimes while programming you may want to only run a line of code if
        something else happens first. With if statements you can run a line of
        code only if another condition is first met.
      </h2>
      <h2>
        Knowing that trees need water to grow fill in the following code: <br />
        if([insert code] is true): <br /> print("Tree Grows!")
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

export default LevelThree;
