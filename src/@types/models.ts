export type FacialAttributes = {
    eye_colour: "brown" | "amber" | "hazel" | "green" | "blue" | "grey";
    hair_colour: "black" | "brown" | "auburn" | "red" | "blond" | "grey";
}

export type Model = {
    id: number;
    name: string;
    facial_attributes: FacialAttributes;
    portrait_url: string;
}
