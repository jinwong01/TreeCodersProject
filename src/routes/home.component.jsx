import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const startGame = async () => {
    navigate("/game/levelone");
  };
  return (
    <div>
      <h1 className="title">Tree Coders</h1>
      <h2>
        Learn the fundamentals of programming in Python by planting a tree!
      </h2>
      <button className="next_button" onClick={startGame}>
        Start
      </button>
    </div>
  );
};

export default Home;
