import React from "react";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import "../styles/calendar.css";

function Calendar(): JSX.Element {
  return (
    <div className="calendar">
      <h1>Team 5032 Calendar</h1>
      <div id="calendar">
        <FullCalendar initialView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin ]} googleCalendarApiKey="AIzaSyDcPk47vA7u0XimeNaimsiyQxtVj5a3XwI" events={[{googleCalendarId: "classroom106157401548519906955@group.calendar.google.com", className: "gcal-event"}]} headerToolbar={{left: "today prev,next", center: "title", right: "timeGridWeek,dayGridMonth,listYear"}} />
      </div>
      <p></p>
      <br></br>
      <p></p>
      <iframe title="Team 5032 Calendar" src="https://calendar.google.com/calendar/embed?src=classroom106157401548519906955%40group.calendar.google.com&ctz=America%2FToronto" style={{ border: 0 }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </div>
  );
}

export default Calendar;