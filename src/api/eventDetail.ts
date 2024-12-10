import { EventType } from "../model/EventType";

export const fetchEventDetail = async (id: string | string[]) => {
  const response = await fetch(
    `https://sportujspolu-api.onrender.com/api/v1/events/${id}`
  );

  return response.json() as Promise<EventType>;
};
