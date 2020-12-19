import React from "react";
//import FullCalendar from "@fullcalendar/react";
//import googleCalendarPlugin from "@fullcalendar/google-calendar";
//import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
//import listPlugin from '@fullcalendar/list';
import "../styles/calendar.css";

function Calendar(): JSX.Element {
  return (
    <div className="calendar">
      <h1>Team 5032 Calendar</h1>
      {/*<div id="calendar">
        <FullCalendar initialView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin ]} googleCalendarApiKey="AIzaSyDcPk47vA7u0XimeNaimsiyQxtVj5a3XwI" events={[{googleCalendarId: "classroom106157401548519906955@group.calendar.google.com", className: "gcal-event"}]} headerToolbar={{left: "today prev,next", center: "title", right: "timeGridWeek,dayGridMonth,listYear"}} />
      </div>*/}
      <iframe title="Team 5032 Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23039BE5&amp;ctz=America%2FToronto&amp;src=Y2xhc3Nyb29tMTA2MTU3NDAxNTQ4NTE5OTA2OTU1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23202124" style={{borderWidth: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      <p></p>
      <br></br>
      <p></p>
    </div>
  );
}

export default Calendar;