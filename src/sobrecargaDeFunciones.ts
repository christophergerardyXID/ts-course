function divide(numero1: number, numero2: number): number;

function divide(numero1: string, numero2: string): number;

function divide(numero1: number, numero2: number, round: boolean): number;

function divide(numero1: number | string, numero2: number | string, round: boolean = false): number {
    const x = Number(numero1);
    const y = Number(numero2);

    const result = x / y;

    if (!round) {
        return result;
    }

    return Math.round(result);
}
