const usuario = {
    nombre: 'Juan',
    apellido1: 'de Porres',
    apellido2: 'Abarcas',
    tel: '91-12-21-212',
    correo: 'juandep@gmail.com',
    edad: 99,
    hobbies: ['guitarra', 'leer'],
    amigos: {
        mejorAmigo: {
            nombre: 'Pedro',
            apellido1: 'Pascal',
            apellido2: 'Dominguez'
        },
        conocidos: {}
    }
}

const mensaje = `Hello, ${usuario.nombre}, ${usuario.apellido1.slice(0,1)}. Welcome, back!`;

function encontrarMejorAmigoMensaje(user) {
    const amgio = `Your best friend is ${user.amigos?.mejorAmigo.nombre || ""} ${user.amigos?.mejorAmigo.apellido1 || ""} ${user.amigos?.mejorAmigo?.apellido2 || ''}`;
    return amgio
}

const amgio = encontrarMejorAmigoMensaje(usuario);

console.log(mensaje);
console.log(amgio);

const person1 = {nombre: 'juan', tel: '000-000-0'};
const person2 = {apellido: 'juan', correo: 'jacobja@gmail.com'};


const combinado = {...person1, ...person2}

console.log(combinado);
