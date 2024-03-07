enum Habitad {
    SELVA,
    CIELO,
    AGUA,
}

type Animal = {
    name: string;
    habitad: Habitad;
}

function sayHi(parm: string, param2: string): string {
    return parm.toUpperCase() + param2.toLowerCase();
}

function run(arg: string): void {
    console.log(arg)
}

function sum(sum1: number, sum2: number): number {
    return sum1 + sum2;
}

function presentarAnimal(infoDelAnimal: Animal): void {
    console.log(infoDelAnimal.name, infoDelAnimal.habitad);
}

const presentarAmigos = (amigos: Animal[]): Animal[] => {
    return amigos;
}

presentarAnimal({
    name: 'Pantera',
    habitad: Habitad.SELVA
});

sayHi("Hola", " Christopher");

sum(1, 2); // 12 -> 3

run("Arrancando app");