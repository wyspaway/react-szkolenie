import React from "react";
import Header from "../components/Header";
import TextSection from "../components/TextSection";

const TEXTS = {
  header: {
    text: "Header",
  },
  footer: {
    text: "Copyright 2020",
  },
  textsection: {
    text: "Treść statyczna strony Contact",
  },
};

function Contact() {
  return (
    <div className="Contact">
      <Header />

      <TextSection text={TEXTS.textsection.text} />
    </div>
  );
}

export default Contact;
