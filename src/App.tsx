import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import EnvelopeAnimation from "./EnvelopeAnimation";
import FadeSlide from "./FadeSlide";
import Calendar from "./Calendar";
import Countdown from "./CountDown";

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
        <div className="content-center" style={{ marginTop: "50px" }}>
          <div>
            <div className="title">Մենք ամուսնանում ենք</div>
            <div className="content-between">
              <div>Հոկտեմբեր 12</div>
              <div>2025</div>
            </div>
          </div>
        </div>

        <div className="content-center" style={{ position: "relative" }}>
          <img
            src="https://optim.tildacdn.one/tild6630-3034-4734-a530-303861363739/-/resize/852x/-/format/webp/Red_and_Beige_Elegan.png.webp"
            alt=""
          />
          {isOpenSecond && <div className="names">Զալիբեկ + Հասմիկ</div>}
        </div>
        {!isOpenSecond && (
          <>
            <div className="content-center letter-position">
              <EnvelopeAnimation openEnvelope={openEnvelope} />
            </div>
            <div className="under-letter-text">Սեղմեք բացիկի վրա</div>
          </>
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
            <div
              className="content-center"
              style={{ marginTop: "20px", marginBottom: "20px" }}>
              <img
                src="https://static.tildacdn.one/tild3930-6261-4661-b737-623665393866/Group_738002694.svg"
                alt=""
              />
            </div>
            <div className="icon content-center">
              <img
                src="https://static.tildacdn.one/tild3063-3462-4135-b763-386566386162/Vector.svg"
                alt=""
              />
            </div>
            <section>
              <div className="description">
                Պսակադրությունը կանցկացվի{" "}
                <strong>Հաղարծնի վանական համալիրում</strong> ք․ Դիլիջան
              </div>
              <div className="section-img content-center">
                <img
                  src="https://static.tildacdn.one/tild6161-6236-4161-b664-626436383065/Vector11.svg"
                  alt=""
                />
              </div>
              <div className="content-center">
                <a
                  className="button"
                  href="https://www.google.com/maps/place/Haghartsin+Monastery+Complex/@40.8018529,44.8912888,609m/data=!3m1!1e3!4m6!3m5!1s0x4041abcfa5aaec0b:0xf3b64d242dbcc7c!8m2!3d40.8020038!4d44.8905975!16s%2Fm%2F026yrf1?entry=ttu&amp;g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                  Քարտեզ
                </a>
              </div>
            </section>
            <section>
              <div className="icon content-center mt-20">
                <img
                  src="https://static.tildacdn.one/tild3533-6335-4934-b533-623065653239/Vector222.svg"
                  alt=""
                />
              </div>
              <div className="description">
                Տոնական խնջույքը կանցկացվի
                <br />
                <strong>Lianna Hall</strong>
                <br />
                Սայաթ-Նովայի փող., 63 շենք
              </div>
              <div className="section-img content-center">
                <img
                  src="https://static.tildacdn.one/tild3565-3032-4233-b839-663230356636/Vector.svg"
                  alt=""
                />
              </div>
              <div className="content-center">
                <a
                  className="button"
                  href="https://www.google.com/maps/place/Haghartsin+Monastery+Complex/@40.8018529,44.8912888,609m/data=!3m1!1e3!4m6!3m5!1s0x4041abcfa5aaec0b:0xf3b64d242dbcc7c!8m2!3d40.8020038!4d44.8905975!16s%2Fm%2F026yrf1?entry=ttu&amp;g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                  Քարտեզ
                </a>
              </div>
            </section>
            <section>
              <div className="section-img content-center mt-20">
                <img
                  src="https://static.tildacdn.one/tild3766-6165-4739-a264-396434326330/Group_738002636.svg"
                  alt=""
                />
              </div>
              <div className="mt-20 content-center" style={{ width: "390px" }}>
                <div className="timing-special-item">
                  <div className="time">15:30</div>
                  <div className="line" />
                  <div className="desc">Պսակադրության արարողություն</div>
                </div>
              </div>
              <div className="mt-20 content-center" style={{ width: "390px" }}>
                <div className="timing-special-item mt-20">
                  <div className="time">17:00</div>
                  <div className="line" />
                  <div className="desc">Հյուրերի դիմավորում</div>
                </div>
              </div>
            </section>
            <div className="countdown-text">մեր հարսանիքին մնացել է․․․</div>
            <Countdown target={undefined} />
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
