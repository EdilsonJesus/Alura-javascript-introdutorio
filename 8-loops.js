console.log(`\n Usando condicionais nas listas`);

console.log(`Opçõles de viagens`);
const listaDestino = new Array (
    'Espirito Santo',
    "Brasilia",
    'Salvador',
    'São Paulo',    
    'Santa Catarina',
);

console.log(listaDestino);


console.log("Lista ATUALIZADA, nova opção");
console.log(listaDestino);

const idadeComprador = 18;
const compradorAcompanhado = false;
let temPassagemComprada = false;
const destino = "Rio Grande do Sul";

console.log("\n Destinos possíveis");
console.log(listaDestino);

const  podeComprar = (idadeComprador >=18 || compradorAcompanhado) == true;
 

let contador = 0;

while(contador <4){
    if(listaDestino[contador]== destino){
        console.log("Destino existe");
    }else{
        console.log("Destino não existe");
    }

    contador += 1;
}
         



