import React from "react";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { fetchEventDetail } from "../../api/EventDetail";
import { useRouter } from "next/router";
import type { EventType } from "../../model/EventType";
import { EventDetail } from "../../components/EventDetail";

const EventDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<EventType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      if (id) {
        const fetchedEvent = await fetchEventDetail(id);
        setEvent(fetchedEvent);
        setIsLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <EventDetail name={event?.name} sport={event?.sport} id={id}></EventDetail>
  );
};

export default EventDetailPage;
