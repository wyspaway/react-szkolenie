import React from "react";
import Header from "../components/Header/Header";
import TextSection from "../components/TextSection/TextSection";

const TEXTS = {
  header: {
    text: "Header",
  },
  textsection: {
    text: "Tekst na stronę About",
  },
};

function About() {
  return (
    <div className="Contact">
      <TextSection text={TEXTS.textsection.text} />
    </div>
  );
}

export default About;
