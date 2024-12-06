import type { EventType } from "../model/EventType";

export const fetchEventDetail = async (
  id: string | string[]
): Promise<EventType> => {
  const response = await fetch(
    `https://sportujspolu-api.onrender.com/api/v1/events/${id}`
  );

  return await response.json();
};
