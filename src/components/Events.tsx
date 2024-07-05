import React from "react";
import { useEffect, useState } from "react";
import type { Event } from "../model/Event";
import style from "./Events.module.scss";
import { Loader } from "../components/Loader";

export const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://sportujspolu-api.onrender.com/api/v1/events"
        );
        setEvents(await response.json());
        setIsLoading(false);
      } catch (error) {}
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={style.list}>
          {events.map((event: Event) => (
            <li key={event.id} className={style.event}>
              <div className={style.sport}>{event.sport}</div>
              <div>From: {event.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
