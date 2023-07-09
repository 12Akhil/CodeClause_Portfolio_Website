import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Enginnering Student",
          "Full Stack Developer",
          "Flutter Beginner",
          "Learner",
          "Coding for Fun",
          "Anime Lover",
          "Gamer",
          "Want to ask Something?"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
