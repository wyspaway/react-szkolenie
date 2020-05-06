import React from "react";
import Header from "./Header";
import Console from "./Console";
import TextSection from "./TextSection";
import AlertInfo from "./AlertInfo";
import Footer from "./Footer";

const TEXTS = {
  alert: {
    alertText: "alert text",
    buttonText: "buttonText",
  },
  header: {
    text: "Header",
  },
  footer: {
    text: "Copyright 2020",
  },
  textsection: {
    text: "Text 1",
    text2: "Text 2",
  },
};

function App() {
  return (
    <div className="App">
      <Header text={TEXTS.header.text} />
      <Console />
      <TextSection
        text={TEXTS.textsection.text}
        text2={TEXTS.textsection.text2}
      />
      <AlertInfo
        buttonText={TEXTS.alert.buttonText}
        alertText={TEXTS.alert.alertText}
      />
      <Footer text={TEXTS.footer.text} />
    </div>
  );
}

export default App;
