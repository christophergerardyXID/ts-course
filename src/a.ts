type User = {
    // CODE...
    name: string;
    lastname: string;
    age: number;
};

type Admin = {

}

type SuperUser = {

}

const chris: User = {
    name: 'Chris',
    lastname: 'Andrade',
    age: 25,
};

const pablito: User = {
    name: 'Pablito',
    age: 30,
    lastname: 'Lopez'
};

const josue: User = {
    name: 'Josue',
    lastname: 'Alvarez',
    age: 60
};

const users: User[] = [
    {
        name: 'Jesus',
        lastname: 'Luna',
        age: 35,
    },
];

const users2: [User, User, string] = [josue, josue, ''];