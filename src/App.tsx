import React, { useRef, useState } from "react";
import "./App.css";
import EnvelopeAnimation from "./EnvelopeAnimation";
import FadeSlide from "./FadeSlide";
import Calendar from "./Calendar";

function App() {
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const AudioRef = useRef(new Audio("/music.mp3"));

  const openEnvelope = () => {
    // const audio = AudioRef.current;
    // if (audio) {
    //   audio.pause();
    //   audio.currentTime = 0;
    //   audio.play().catch(() => {});
    // }
    // AudioRef.current.play();
    setTimeout(() => {
      setIsOpenFirst(false);
    }, 3000);
    setTimeout(() => {
      setIsOpenSecond(true);
      setIsOpenFirst(true);
    }, 4000);
  };
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <FadeSlide
        show={isOpenFirst}
        direction="center"
        distance={120}
        duration={1}>
        <div className="content-center" style={{ marginTop: "150px" }}>
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
        {!isOpenSecond && (
          <div className="content-center letter-position">
            <EnvelopeAnimation openEnvelope={openEnvelope} />
          </div>
        )}
        {isOpenSecond && (
          <>
            {" "}
            <div className="subtitle">
              Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց
              արարողությանը։
            </div>
            <div>
              <Calendar />
            </div>
            <div className="content-center" style={{ marginTop: "20px" }}>
              <img
                src="https://static.tildacdn.one/tild3930-6261-4661-b737-623665393866/Group_738002694.svg"
                alt=""
              />
            </div>
          </>
        )}
      </FadeSlide>
      {/* <FadeSlide
        show={isOpenSecond}
        direction="center"
        distance={120}
        duration={1}>
        <div style={{ marginTop: "150px" }}>
          <div className="content-center">
            <div>
              <div className="title">Մենք ամուսնանում ենք</div>
              <div className="content-between">
                <div>Հոկտեմբեր 12</div>
                <div>2025</div>
              </div>
            </div>
          </div>
        
        </div>
      </FadeSlide> */}
    </div>
  );
}

export default App;
