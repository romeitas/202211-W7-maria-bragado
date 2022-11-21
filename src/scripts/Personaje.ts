export class Personaje {
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
    communication() {
        return this.message;
    }

    isDeath() {
        this.isAlive = false;
    }
}
