import React, { useState } from "react";
import "./App.css";

interface PropsType {
  openEnvelope: () => void;
}

const EnvelopeAnimation: React.FC<PropsType> = ({ openEnvelope }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`wrapper ${isOpen ? "open" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
          openEnvelope();
        }}>
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeAnimation;
