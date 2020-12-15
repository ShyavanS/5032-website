import React from "react";
import "../styles/calendar.css";

function Calendar(): JSX.Element {
  return (
    <div className="calendar">
      <h1>Team 5032 Calendar</h1>
      <iframe title="Team 5032 Calendar" src="https://calendar.google.com/calendar/embed?src=classroom106157401548519906955%40group.calendar.google.com&ctz=America%2FToronto" style={{ border: 0 }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </div>
  );
}

export default Calendar;