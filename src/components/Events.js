import style from "./Events.module.scss";

const mockEvents = [
  {
    id: 1,
    name: "Vendy",
    sport: "Basketball",
  },
  {
    id: 2,
    name: "Lukas",
    sport: "Football",
  },
  {
    id: 3,
    name: "Honza",
    sport: "Tennis",
  },
];

export const Events = () => {
  return (
    <div className={style.container}>
      <div>Events</div>
    </div>
  );
};
