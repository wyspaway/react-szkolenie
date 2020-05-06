import React from "react";
import Header from "../components/Header";
import TextSection from "../components/TextSection";

const TEXTS = {
  header: {
    text: "Header",
  },
  textsection: {
    text: "404",
  },
};

function page404() {
  return (
    <div className="Contact">
      <Header />

      <TextSection text={TEXTS.textsection.text} />
    </div>
  );
}

export default page404;
