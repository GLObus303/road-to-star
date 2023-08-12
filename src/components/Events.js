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
  {
    id: 4,
    name: "Pepa",
    sport: "Rugby",
  },
  {
    id: 5,
    name: "Fanda",
    sport: "Traktor",
  },
  {
    id: 6,
    name: "Jarmila",
    sport: "Golf",
  },
];

const renderedEvents = mockEvents.map((mockEvent) => (
  <li key={mockEvent.id} className={style.event}>
    <div style={{ fontWeight: "bold" }}>{mockEvent.sport}</div>
    <div>From: {mockEvent.name}</div>
  </li>
));

export const Events = () => {
  return <ul className={style.list}>{renderedEvents}</ul>;
};
