import React from "react";

import { LinkButton } from "./LinkButton";
import style from "./EventDetail.module.scss";

type EventDetailProps = {
  name?: string;
  sport?: string;
  id?: string | string[];
};

export const EventDetail: React.FC<EventDetailProps> = ({
  name,
  sport,
  id,
}) => (
  <div>
    <p>Name: {name}</p>
    <p>Sport: {sport}</p>
    <p>Id: {id}</p>
    <LinkButton href="/" className={style.linkButtonMinContent}>
      Back
    </LinkButton>
  </div>
);
