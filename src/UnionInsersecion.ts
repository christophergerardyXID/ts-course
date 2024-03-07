const edad: number | string | boolean = true;

type Entity = {
    exists: boolean;
}

type Dog = {
    name: string;
    bark: boolean;
}

type Animales = {
    nombre: string;
    eats: boolean;
}

// Union de tipos
const entity: Dog | Animales | Entity = {
    nombre: '',
    bark: true,
    name: '',
    eats: true,
    exists: false,
};

// Insersción
const entityDos: Dog & Animales & Entity = {
    nombre: '',
    eats: true,
    name: '',
    bark: true,
    exists: true,
};





