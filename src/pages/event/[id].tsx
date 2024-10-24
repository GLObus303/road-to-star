import React from "react";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { Event } from "../../model/Event";

const EventDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<Event>({} as Event);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(
        `https://sportujspolu-api.onrender.com/api/v1/events/${id}`
      );
      setEvent(await response.json());
      setIsLoading(false);
    };

    fetchEvent();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <p>Name: {event.name}</p>
      <p>Sport: {event.sport}</p>
      <p>Id: {id}</p>
      <button onClick={() => router.push("/")}>Back</button>
    </div>
  );
};

export default EventDetail;
