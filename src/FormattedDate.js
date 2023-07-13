import React, { useState } from "react";

export default function FormattedDate(props) {
  console.log(props.dateInfo);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.dateInfo.getDay()];
  let number = props.dateInfo.getDate();
  let hours = props.dateInfo.getHours();
  let minutes = props.dateInfo.getMinutes();
  let month = months[props.dateInfo.getMonth()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      {day} {number} {month}, {hours}:{minutes}
    </div>
  );
}
