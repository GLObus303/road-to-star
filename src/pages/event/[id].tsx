import React from "react";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { EventType } from "../../model/Event";
import { EventDetail } from "../../components/EventDetail";

const EventDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<EventType>();
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
    <EventDetail name={event?.name} sport={event?.sport} id={id}></EventDetail>
  );
};

export default EventDetailPage;
