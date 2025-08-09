import { BookState } from "./BookState";

export class Book {
    id?: number;
    userId?: number;
    name?: string;
    state: BookState;

    constructor(id?: number, userId?: number, name?: string, state?: BookState) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.state = state ?? BookState.SHELVED;
    };
};

