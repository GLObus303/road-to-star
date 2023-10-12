import style from "./Events.module.scss";
import React, { useEffect } from "react";

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const apiUrl = "https://sportujspolu-api.onrender.com/api/v1/events";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const renderedEvents = events.map((event) => (
    <li key={event.id} className={style.event}>
      <div className={style.sport}>{event.sport}</div>
      <div>From: {event.name}</div>
    </li>
  ));

  return <ul className={style.list}>{renderedEvents}</ul>;
};
