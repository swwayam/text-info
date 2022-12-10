import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { BsMoon, BsSun } from "react-icons/bs";

const Home = () => {
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("dark");

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
      const str = oldContent.trim().split(" ");
      const capFirst = str.map(
        (e) => e[0].toUpperCase() + e.slice(1).toLowerCase()
      );
      return capFirst.join(" ");
    });
  };

  const copyToClip = () => {
    navigator.clipboard.writeText(content);
  };

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <div className={`div home-${theme}`}>
      {theme === "light" ? (
        <BsMoon className="icon moon" onClick={changeTheme} />
      ) : (
        <BsSun className="icon sun" onClick={changeTheme} />
      )}
      <Navbar theme={theme} />
      <div className="home ">
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          cols="120"
          rows="30"
          placeholder="Enter Your Text"
        ></textarea>
        <div className="btn-grp ">
          <button className={`btn-${theme}`} onClick={capitalize}>
            Captilize All Text
          </button>
          <button className={`btn-${theme}`} onClick={lowerCase}>
            Lower Case All Text
          </button>
          <button className={`btn-${theme}`} onClick={capFirstChar}>
            Captilize First Character
          </button>
          <button className={`btn-${theme}`} onClick={copyToClip}>
            Copy to Clip Board
          </button>
          <button className={`btn-${theme}`}>
            Charecter Count: {content.length}
          </button>
          <button className={`btn-${theme}`}>
            WordCount: {content.length > 1 ? content.split(" ").length : "0"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
