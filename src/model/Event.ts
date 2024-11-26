export type EventType = {
  id: number;
  name: string;
  sport: string;
  date: Date;
  location: string;
  price: number;
  description: string;
  level: LevelType;
};

export type LevelType = "Any" | "Intermediate" | "Beginner";
