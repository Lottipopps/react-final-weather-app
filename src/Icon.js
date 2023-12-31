import React from "react";
import Oned from "./icons/01d.svg";
import Onen from "./icons/01n.svg";
import Twod from "./icons/02d.svg";
import Twon from "./icons/02n.svg";
import Threed from "./icons/03d.svg";
import Threen from "./icons/03n.svg";
import Fourd from "./icons/04d.svg";
import Fourn from "./icons/04n.svg";
import Nined from "./icons/09d.svg";
import Ninen from "./icons/09n.svg";
import Tend from "./icons/10d.svg";
import Tenn from "./icons/10n.svg";
import Elevd from "./icons/11d.svg";
import Elevn from "./icons/11n.svg";
import Third from "./icons/13d.svg";
import Thirn from "./icons/13n.svg";
import Fiftyd from "./icons/50d.svg";
import Fiftyn from "./icons/50n.svg";

export default function Icon(props) {
  const codeMapping = {
    "clear-sky-day": Oned,
    "clear-sky-night": Onen,
    "few-clouds-day": Twod,
    "few-clouds-night": Twon,
    "scattered-clouds-day": Threed,
    "scattered-clouds-night": Threen,
    "broken-clouds-day": Fourd,
    "broken-clouds-night": Fourn,
    "shower-rain-day": Nined,
    "shower-rain-night": Ninen,
    "rain-day": Tend,
    "rain-night": Tenn,
    "thunderstorm-day": Elevd,
    "thunderstorm-night": Elevn,
    "snow-day": Third,
    "snow-night": Thirn,
    "mist-day": Fiftyd,
    "mist-night": Fiftyn,
  };
  return (
    <span className="Icon">
      <img
        src={codeMapping[props.imageCode]}
        height={props.height}
        alt="weather-icon"
      />
    </span>
  );
}
