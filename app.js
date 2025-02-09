//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var minhaLista = [1,2,3];
var listaDois = [4,5,6];
var novaLista = minhaLista.concat(listaDois);
console.log(novaLista);
/* retorno: 
[ 1, 2, 3, 4, 5, 6 ]

novaLista.pop();
console.log(novaLista);
/* retorno: 
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5 ]

embaralhar(novaLista);
console.log(novaLista);
function embaralhar (arr){
      let i = arr.length;
    while (--i > 0){
          let randI = Math.floor(Math.random() * (i + 1));
          [arr[randI], arr[i]] = [arr[i], arr[randI]];
    }
    console.log('Embaralhou');
}
/* retorno: 
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5 ]
Embaralhou
[ 4, 2, 5, 1, 3 ]
embaralhar(novaLista);
console.log(novaLista);
function embaralhar (arr){
      let i = arr.length;
    while (--i > 0){
          let randI = Math.floor(Math.random() * (i + 1));
          [arr[randI], arr[i]] = [arr[i], arr[randI]];
    }
    console.log('Embaralhou');
}
/* retorno: 
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5 ]
Embaralhou
[ 4, 2, 5, 1, 3 ]
var duplicados = [1,3,4];
var novaLista = novaLista.concat(duplicados);
console.log(novaLista);
novaLista = removerDuplicadas(novaLista);
console.log(novaLista);

function removerDuplicadas(arr){
    // Usando Set para obter elementos únicos
    var conjuntoUnico = new Set(arr);
    // Convertendo o Set de volta para um array
    var novoArray = Array.from(conjuntoUnico);
    console.log('Duplicidade removida');
    return novoArray;
}

/* retorno: 
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5]
Embaralhou
[3, 5, 2, 4, 1]
[3, 5, 2, 4,  1, 1, 3, 4]
Duplicidade removida
[3, 5, 2, 4, 1]*/
var minhaLista = [1,2,3];
var listaDois = [4,5,6];
var novaLista = minhaLista.concat(listaDois);
console.log(novaLista);
novaLista.pop();
console.log(novaLista);
embaralhar(novaLista);
console.log(novaLista);
var duplicados = [1,3,4];
var novaLista = novaLista.concat(duplicados);
console.log(novaLista);
novaLista = removerDuplicadas(novaLista);
console.log(novaLista);

function removerDuplicadas(arr){
    // Usando Set para obter elementos únicos
    var conjuntoUnico = new Set(arr);
    // Convertendo o Set de volta para um array
    var novoArray = Array.from(conjuntoUnico);
    console.log('Duplicidade removida');
    return novoArray;
}

function embaralhar (arr){
      let i = arr.length;
    while (--i > 0){
          let randI = Math.floor(Math.random() * (i + 1));
          [arr[randI], arr[i]] = [arr[i], arr[randI]];
    }
    console.log('Embaralhou');
}
