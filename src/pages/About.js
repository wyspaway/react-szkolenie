import React from "react";
import Header from "../components/Header/Header";
import TextSection from "../components/TextSection/TextSection";

const TEXTS = {
  header: {
    text: "Header",
  },
  textsection: {
    text: 123,
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
