enum Colores {
    ROJO = '#334f32',
    VERDE = 'green',
    AZUL = 'blue',
}

type Config = {
    color: Colores;
    alto: number;
    ancho: number;
}

const styleConfig: Config = {
    color: Colores.VERDE,
    alto: 100,
    ancho: 200,
}

styleConfig.color = Colores.ROJO;
