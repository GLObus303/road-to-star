import type { EventType } from "../model/EventType";

export const fetchEvents = async (): Promise<EventType[]> => {
  const response = await fetch(
    "https://sportujspolu-api.onrender.com/api/v1/events"
  );

  return await response.json();
};
