console.log(`Usando condicionais nas listas`);

console.log(`Opçõles de viagens`);
const listaDestino = new Array (
    'Espirito Santo',
    "Brasilia",
    'Salvador',
    'São Paulo',    
    'Santa Catarina',
);

console.log(listaDestino);

listaDestino.push('Rio Grande do Sul');
console.log("Lista ATUALIZADA, nova opção");
console.log(listaDestino);

const idadeComprador = 18;
const compradorAcompanhado = false;
const temPassagemComprada = true;
// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDestino.splice(1,2);
// }else if(compradorAcompanhado){
//     console.log("O Comprador está acompanhado, venda liberada");
//     listaDestino.splice(1,2);    
// }else{
//     console.log("Comprador menor de idade, venda proibida!!!");
// }

if (idadeComprador >=18 || compradorAcompanhado){
    console.log("Boa Viagem");
    listaDestino.splice(1,2);
}else{
    console.log("Venda proibida!!!")
}

console.log(listaDestino);          

console.log("Embarque \n\n");          
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("infelizmente você não pode embarcar ");
}

console.log(listaDestino);          

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

