/**
 * ANY
 */

type Persona = {
    name: string;
    lastname: string;
    age: number;
}

const user: any = {
    name: 'Chris',
    lastname: 'Andrade',
    age: 25,
};

user.name = true;
user.user = 1;
user.name = 3;

delete user.age;

user.toUpperCase();
