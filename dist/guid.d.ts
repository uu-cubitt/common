export declare class Guid {
    private guid;
    constructor(g: string);
    toString(): string;
    static parse(guid: string): Guid;
    static newGuid(): Guid;
}
