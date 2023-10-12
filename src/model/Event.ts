export type Events = {
    id:          number;
    name:        string;
    sport:       string;
    date:        Date;
    location:    string;
    price:       number;
    description: string;
    level:       Level;
}

export type Level = "Any" | "Intermediate" | "Beginner";
