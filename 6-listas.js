console.log(`Trabalhando com listas`);

console.log("Destinos possiveis")
const listaDestino = new Array (
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
)

console.log(listaDestino);

console.log("Atualizando informação ");
listaDestino.push('Curitiba'); //adicionando item na lista 
console.log(listaDestino);  


console.log(`Demanda seletiva `);//Exluindo item da lista, "posição,quantidade" .
listaDestino.splice(1,1);

console.log(listaDestino);

console.log(`Acessando Item expecifico`);
console.log(listaDestino[2], listaDestino[0]);