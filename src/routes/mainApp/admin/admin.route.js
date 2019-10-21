import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAuthStatus } from "../../../hooks/authHooks";
import { ToastService } from "../../../services/toast.service";
import styles from "./admin-route.module.scss";

const toastService = new ToastService();

export const AdminRoute = () => {
  const isAuth = useAuthStatus(true);
  useEffect(() => {
    if (!isAuth) {
      toastService.alert("hey you are not supposed to be here!!", 5000);
    }
  }, [isAuth]);
  const handleDateClick = arg => {
    console.log(arg);
  };
  return (
    <div className={isAuth ? "" : styles["blurry-div"]}>
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
    </div>
  );
};

export default AdminRoute;
