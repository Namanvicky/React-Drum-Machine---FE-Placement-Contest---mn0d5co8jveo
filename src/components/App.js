Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@Namanvicky 
Shraddha08-cmyk
/
React-Drum-Machine---Placecom-Frontend-Contest-02-03-2023---kimp56m5poz1
Public
generated from Newton-School/drum-machine-boilerplate
Fork your own copy of Shraddha08-cmyk/React-Drum-Machine---Placecom-Frontend-Contest-02-03-2023---kimp56m5poz1
Code
Issues
Pull requests
Actions
Projects
Security
Insights
React-Drum-Machine---Placecom-Frontend-Contest-02-03-2023---kimp56m5poz1/src/components/App.js /
@Shraddha08-cmyk
Shraddha08-cmyk Update App.js
Latest commit 9434ed9 3 weeks ago
 History
 1 contributor
92 lines (85 sloc)  2.08 KB

import React, { useState } from "react";
import "../styles/App.css";
import Pads from "./Pads";

export const bank1 = {
  Q: {
    name: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  W: {
    name: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  E: {
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  A: {
    name: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  S: {
    name: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  D: {
    name: "Open Hi-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  Z: {
    name: "Kick n Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  X: {
    name: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  C: {
    name: "Closed Hi-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
};

function ControlScreen({ volume, volumeHandler, on, onHandler }) {
  return (
    <div id="control-screen">
      <label id="label-power">
        <input type="checkbox" id="power" onClick={() => onHandler()} />
        <span className="checkmark">{on ? "ON" : "OFF"}</span>
      </label>
      <label id="label-volume">
        <input
          type="range"
          id="volume"
          value={volume}
          onChange={(e) => volumeHandler(e.target.value)}
        />
        <span id="volume-display">Volume : {volume} </span>
      </label>
    </div>
  );
}

function App() {
  const [volume, setVolume] = useState(0);
  const [on, setOn] = useState(false);

  const volumeHandler = (val) => {
    setVolume(val);
  };

  const onHandler = () => {
    setOn(!on);
  };

  return (
    <div id="drum-machine">
      <Pads power={on} />
      <br />
      <br />
      <br />
      <ControlScreen
        volume={volume}
        volumeHandler={volumeHandler}
        on={on}
        onHandler={onHandler}
      />
    </div>
  );
}

export default App;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
React-Drum-Machine---Placecom-Frontend-Contest-02-03-2023---kimp56m5poz1/App.js at main · Shraddha08-cmyk/React-Drum-Machine---Placecom-Frontend-Contest-02-03-2023---kimp56m5poz1
