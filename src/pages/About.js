import React from "react";
import Header from "../components/Header";
import TextSection from "../components/TextSection";

const TEXTS = {
  header: {
    text: "Header",
  },
  textsection: {
    text: "Treść statyczna strony About",
  },
};

function About() {
  return (
    <div className="Contact">
      <Header />

      <TextSection text={TEXTS.textsection.text} />
    </div>
  );
}

export default About;
