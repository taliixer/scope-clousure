//Todas y cada funcion van a tener su propio alcance y sus variables solo van a ser accesibles dentro de esta funcion y en cualquiera de sus funciones anidadas

function greeting (){
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName} !`)
    }
}

greeting();
console.log(userName)