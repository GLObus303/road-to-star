import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

import type { EventType } from "../model/EventType";
import { fetchEvents } from "../api/events";
import { Loader } from "../components/Loader";
import style from "./Events.module.scss";

export const Events: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
      setIsLoading(false);
    };

    loadEvents();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={style.list}>
      {events.map((event) => (
        <li key={event.id} className={style.event}>
          <Link className={style.link} href={`/event/${event.id}`}>
            <div className={style.sport}>{event.sport}</div>
            <div className={style.from}>From: {event.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
