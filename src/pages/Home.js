import React from "react";
import Header from "../components/Header";
import Console from "../components/Console";
import TextSection from "../components/TextSection";
import AlertInfo from "../components/AlertInfo";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
// import PostDetailsContainer from "../components/PostDetails/PostDetails.container";
import PostListContainer from "../components/PostList/PostList.container";
import Form from "../components/Form";

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

function Home() {
  return (
    <div className="Home">
      <Header />
      <Console />
      <TextSection
        text={TEXTS.textsection.text}
        text2={TEXTS.textsection.text2}
      />
      <AlertInfo
        buttonText={TEXTS.alert.buttonText}
        alertText={TEXTS.alert.alertText}
      />
      <Counter />
      <Form />
      {/* <PostDetailsContainer /> */}
      <PostListContainer />
      <Footer />
    </div>
  );
}

export default Home;
