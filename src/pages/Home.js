import React from "react";
import Console from "../components/Console/Console";
import TextSection from "../components/TextSection/TextSection";
import AlertInfo from "../components/AlertInfo/AlertInfo";
// import Counter from "../components/Counter/Counter";
import CounterHook from "../components/CounterHook/CounterHook.component";
// import CounterFunctional from "../components/CounterFunctional/CounterFunctional";
import PostDetailsContainer from "../components/PostDetails/PostDetails.container";
import PostListContainer from "../components/PostList/PostList.container";
import Form from "../components/Form/Form";

const TEXTS = {
  alert: {
    alertText: "alert text",
    buttonText: "buttonText",
  },

  footer: {
    text: "Copyright 2020",
  },
  textsection: {
    text: "Text 1",
    text2: "Text 2",
  },
};

function Home() {
  return (
    <div className="Home">
      <PostDetailsContainer />
      <Console />
      <TextSection
        text={TEXTS.textsection.text}
        text2={TEXTS.textsection.text2}
      />
      <AlertInfo
        buttonText={TEXTS.alert.buttonText}
        alertText={TEXTS.alert.alertText}
      />
      {/* <Counter /> */}
      <CounterHook />
      <Form />

      <PostListContainer />
    </div>
  );
}

export default Home;
