function divideBy(number1: number, numero2: number, round: boolean = true) {
    if (round) {
        return Math.round( number1 / numero2);
    }

    return number1 / numero2;
}

function sum1(numero1: number, numero2?: number): number {
    if (numero2) {
        return numero1 + numero2;
    }

    return numero1 + numero1;
}

sum1(10);
sum1(10, 20);

divideBy(10, 2);
divideBy(10, 20, false);

type Administrador = {
    key: string;
    name: string;
    password: string;
    baja?: boolean;
    children?: string[];
    married?: boolean;
}

const adminChris: Administrador = {
    key: '1-B33',
    name: 'Christopher',
    password: '12345',
}

const adminPedro: Administrador = {
    key: "10",
    name: "Pedro",
    password: "32243234",
    children: ["July", "Pedrito jr."]
}




