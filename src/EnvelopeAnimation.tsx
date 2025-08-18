import React, { useState } from "react";
import "./App.css";
export default function EnvelopeAnimation() {
  return (
    <div>
      <div className="wrapper">
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
