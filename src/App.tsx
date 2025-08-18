import React from "react";
import "./App.css";
import EnvelopeAnimation from "./EnvelopeAnimation";

function App() {
  const openEnvelope = () => {
    console.log("Envelope opened!");
  };
  return (
    <>
      <div className="title">Մենք ամուսնանում ենք</div>
      <div className="content-between">
        <div>Հոկտեմբեր 12</div>
        <div>2025</div>
      </div>
      <div className="content-center">
        <img
          src="https://optim.tildacdn.one/tild6630-3034-4734-a530-303861363739/-/resize/852x/-/format/webp/Red_and_Beige_Elegan.png.webp"
          alt=""
        />
      </div>
      <div className="content-center letter-position">
        <EnvelopeAnimation openEnvelope={openEnvelope} />
      </div>
    </>
  );
}

export default App;
