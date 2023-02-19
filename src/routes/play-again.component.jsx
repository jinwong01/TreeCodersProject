import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const PlayAgain = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const playGame = async () => {
    navigate("/home");
  };
  return (
    <div>
      <h1 id="title" className="title">
        Congratulations!
      </h1>
      <h2>Previous Question Answer: water</h2>
      <h2>
        Congratulations! You planted a tree and learned some programming
        fundamentals along the way.
      </h2>
      <button className="next_button" onClick={playGame}>
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
