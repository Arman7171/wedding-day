import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import EnvelopeAnimation from "./EnvelopeAnimation";
import FadeSlide from "./FadeSlide";
import Calendar from "./Calendar";

function App() {
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);

  // One-time attempt to start audio on any user gesture (fallback)
  useEffect(() => {
    const tryStart = async () => {
      if (audioStarted) return;
      const a = audioRef.current;
      if (!a) return;
      try {
        await a.play();
        setAudioStarted(true);
        removeListeners();
      } catch {
        // Still blocked (e.g., iOS silent switch); do nothing.
      }
    };

    const events = ["pointerdown", "keydown", "touchstart"];
    const removeListeners = () => {
      events.forEach((e) => window.removeEventListener(e, tryStart, true));
    };

    events.forEach((e) =>
      window.addEventListener(e, tryStart, { passive: true })
    );
    return removeListeners;
  }, [audioStarted]);

  const startAudioNow = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      // Some browsers require the first play() to be in direct response to the event
      await a.play();
      setAudioStarted(true);
    } catch (err) {
      // Optional: show UI hint: "Tap again with sound on"
      console.warn("Audio blocked:", err);
    }
  };

  const openEnvelope = async () => {
    // Start audio *immediately* on this user click/tap
    await startAudioNow();

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
            {/* Ensure EnvelopeAnimation calls the provided onClick directly on user tap/click */}
            <EnvelopeAnimation openEnvelope={openEnvelope} />
          </div>
        )}

        {isOpenSecond && (
          <>
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

        {/* Remove autoPlay; let user gesture start it. Keep it hidden. */}
        <audio
          ref={audioRef}
          src="/music.mp3" // place music.mp3 in /public
          loop
          preload="auto"
          style={{ display: "none" }}
        />
      </FadeSlide>
    </div>
  );
}

export default App;
