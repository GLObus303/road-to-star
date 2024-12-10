import { EventType } from "../model/EventType";

export const fetchEvents = async () => {
  const response = await fetch(
    "https://sportujspolu-api.onrender.com/api/v1/events"
  );

  return response.json() as Promise<EventType>;
};
