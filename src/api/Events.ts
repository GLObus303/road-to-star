export const fetchEvents = async () => {
  const response = await fetch(
    "https://sportujspolu-api.onrender.com/api/v1/events"
  );

  return await response.json();
};
