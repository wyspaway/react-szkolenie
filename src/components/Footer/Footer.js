import React from "react";

const TEXTS = {
  footer: {
    text: "&copy; Copyright 2020",
  },
};

function Footer() {
  return <footer>{TEXTS.footer.text}</footer>;
}

export default Footer;
