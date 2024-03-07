enum Chips {
    AMD = 'AMD',
    INTEL = 'INTEL',
    APPLE = 'APPLE S.'
}

enum GPUS {
    NVDIA,
    AMD,
    INTEL
}

interface AccionesDeComputadora {
    salud: number;
    encender(): void;
    apagar(): void;
    comprobarSalud(): void;
}

class Computador {
    protected chip: Chips = Chips.AMD;
    protected ram: number = 16;
    protected disk: string = '512mb';
    protected gpu: GPUS = GPUS.NVDIA;
}

class Laptop extends Computador implements AccionesDeComputadora {
    public salud: number = 90;

    public encender() {
        console.log('Encendiendo computadora');
    }

    public apagar(): void {
        console.log('Apagando computadora');
    }

    public comprobarSalud(): void {
        if (this.salud > 80) {
            console.log('Salud de la laptop correcta');
        } else {
            console.log('Salud baja ve al tecnico');
        }
    }

    public readonly tipoDeCambio: number = 17.90;

    public price: number = 10000; // $10, 000

    private activationKey: string = '42-2-4f-c2-2-24--c324r2';

    protected SO_name: string = 'Ubuntu';

    public getPublicPriceInDolars(): void {
        console.log(this.price + "$");
    }
}

abstract class Maquina {
    abstract run(): void;

    public init() {
        this.run();
    }
}

class Cafetera extends Maquina {
    public run() {
        console.log('trabajando...');
    }
}

const computador = new Computador();
const laptopHp: Laptop = new Laptop();