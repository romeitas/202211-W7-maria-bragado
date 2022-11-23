export interface PersonajeTodo {
    name: string;
    family: string;
    age: number;
    isAlive: boolean;
    message: string;
    serie: string;
    communication(): string;
    death(): boolean;
}
export class Personaje implements PersonajeTodo {
    name: string;
    family: string;
    age: number;
    isAlive: boolean;
    message: string;
    static serie = 'Game of Thrones';

    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.isAlive = true;
        this.message = '';
    }
    communication(): string {
        return this.message;
    }

    death(): boolean {
        return (this.isAlive = false);
    }
}
