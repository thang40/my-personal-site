import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export const AdminRoute = () => {
  const handleDateClick = arg => {
    console.log(arg);
  };
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[interactionPlugin, dayGridPlugin]}
      weekends={false}
      dateClick={handleDateClick}
      eventClick={handleDateClick}
      events={[
        { title: "event 1", date: "2019-10-16" },
        { title: "event 2", date: "2019-04-02" }
      ]}
    />
  );
};

export default AdminRoute;
