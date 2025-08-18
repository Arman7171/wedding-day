import React, { useState } from "react";
import "./App.css";
import EnvelopeAnimation from "./EnvelopeAnimation";
import FadeSlide from "./FadeSlide";

function App() {
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const openEnvelope = () => {
    setTimeout(() => {
      setIsOpenFirst(false);
    }, 3000);
    setTimeout(() => {
      setIsOpenSecond(true);
    }, 4000);
  };
  return (
    <>
      <FadeSlide
        show={isOpenFirst}
        direction="center"
        distance={120}
        duration={1}>
        <div className="content-center">
          <div>
            <div className="title">Մենք ամուսնանում ենք</div>
            <div className="content-between">
              <div>Հոկտեմբեր 12</div>
              <div>2025</div>
            </div>
          </div>
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
      </FadeSlide>
      <FadeSlide
        show={isOpenSecond}
        direction="center"
        distance={120}
        duration={1}>
        <div className="content-center">
          <div>
            <div className="title">Մենք ամուսնանում ենք</div>
            <div className="content-between">
              <div>Հոկտեմբեր 12</div>
              <div>2025</div>
            </div>
          </div>
        </div>
        <div className="content-center">
          <img
            src="https://optim.tildacdn.one/tild6630-3034-4734-a530-303861363739/-/resize/852x/-/format/webp/Red_and_Beige_Elegan.png.webp"
            alt=""
          />
        </div>
      </FadeSlide>
    </>
  );
}

export default App;
