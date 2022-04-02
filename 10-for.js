console.log("Usando o break");

console.log("Lista de destinos");
const listaDestino = new Array (
    'Salvador',
    'São Paulo',
    'Florianopolis',
);

console.log(listaDestino);

const idadeComprador = 18;
const compradorAcompanhado = false;
let temPassagemComprada = false;
const destino = "Florianopolis";

const podeComprar = idadeComprador >= 18 || compradorAcompanhado == true;

let contador = 0; 
let destinoExiste = false;
while(contador<3){
    if(listaDestino[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("O destino" , destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Houce um erro, sintimos muito!!!")
}

for(let cont = 0; cont < 3; cont++){
    if(listaDestino[cont]== destino);{
    destinoExiste = true;
    }
}