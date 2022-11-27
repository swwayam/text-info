import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const [content, setContent] = useState("");

  const capitalize = () => {
    setContent((oldContent) => oldContent.toUpperCase());
  };

  const lowerCase = () => {
    setContent((oldContent) => oldContent.toLowerCase());
  };

  // str = Hi i am swayam and I am a teacher
  // str split " "
  // ["hi", "i", "am"]
  // loop to uppercase
  // ["Hi", "I", "Am"]
  // join arr "Hi I Am Swayam"

  const capFirstChar = () => {
    setContent((oldContent) => {
      const str = oldContent.split(" ");
      const capFirst = str.map(
        (e) => e[0].toUpperCase() + e.slice(1).toLowerCase()
      );
      return capFirst.join(" ");
    });
  };

  const copyToClip = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div>
      <Navbar />
      <div className="home">
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          cols="120"
          rows="30"
          placeholder="Enter Your Text"
        ></textarea>
        <div className="btn-grp">
          <button onClick={capitalize}>Captilize All Text</button>
          <button onClick={lowerCase}>Lower Case All Text</button>
          <button onClick={capFirstChar}>Captilize First Character</button>
          <button onClick={copyToClip}>Copy to Clip Board</button>
          <button>Charecter Count: {content.length}</button>
          <button>WordCount: {content.length > 1 ? content.split(" ").length : "0"} </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
