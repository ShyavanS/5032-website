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
        <FullCalendar
          initialView="dayGridMonth"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            googleCalendarPlugin
          ]}
          eventSources={[{
            googleCalendarApiKey: "AIzaSyDcPk47vA7u0XimeNaimsiyQxtVj5a3XwI",
            googleCalendarId: "classroom106157401548519906955@group.calendar.google.com",
            className: "gcal-event"
          }]}
          headerToolbar={{
            left: "today prev,next",
            center: "title",
            right: "timeGridWeek,dayGridMonth,listYear"
          }}
          eventClick={
            function (arg) {
              window.open(arg.event.url, '_blank', 'width=700,height=600');
              arg.jsEvent.preventDefault();
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;