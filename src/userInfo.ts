
export interface Data {
    role: string;
    surname: string;
    name: string;
    secondName: string;
    groupName: string | null;
}

export const userInfo: Data[] = [
    { role: "Преподаватель", surname: "Астафьев", name: "Кирилл", secondName: "Александрович", groupName: null },
    { role: "Студент", surname: "Астафьев", name: "Кирилл", secondName: "Александрович", groupName: "ИСПП-01" },
];

export class Filters {
    constructor(
        public course: string,
        public semester: string,
        public group: string,
        public discipline: string,
        public work: string
    ) {}
}