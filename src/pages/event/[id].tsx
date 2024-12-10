import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Loader } from "../../components/Loader";
import { fetchEventDetail } from "../../api/eventDetail";
import type { EventType } from "../../model/EventType";
import { EventDetail } from "../../components/EventDetail";

const EventDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<EventType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      if (!id) {
        return;
      }

      const fetchedEvent = await fetchEventDetail(id);
      setEvent(fetchedEvent);
      setIsLoading(false);
    };

    loadEvent();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return <EventDetail name={event?.name} sport={event?.sport} id={id} />;
};

export default EventDetailPage;
