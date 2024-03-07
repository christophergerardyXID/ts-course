type Humano = {
    name: string;
    lastname: string;
    job: string;
    presentarse(param1: string): void;
}

interface SuperHumano {
    name: string;
    lastname: string;
    job: string;
    presentarse(param1: string): void;
}

const lalito: Humano = {
    job: '',
    name: '',
    lastname: '',

    presentarse(param1: string) {
        console.log(param1);
    }
}

const pedritoSola: SuperHumano = {
    job: '',
    name: '',
    lastname: '',
    presentarse(param1: string) {
        console.log(param1);
    }
}

interface SuperPersona extends SuperHumano {
    volar(): void;
}

const jesus: SuperPersona = {
    name: "",
    lastname: "",
    job: "",

    volar(): void {
        console.log('volar')
    },

    presentarse(param1: string): void {
        console.log(param1)
    }
};

jesus.volar();
jesus.presentarse('Hola soy Jesus');