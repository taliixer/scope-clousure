// variables

var a; //Esta es una declaracion
var b = 'b'; //Aqui declaramos y asignamos

b = 'bebe';   //reasignacion
var a = 'aa'; //redeclaracion


//GLOBAL SCOPE
//Cualquier variable dentro del cuerpo del documento se genera en un scope global 

var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//Warning

function countries() {
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country)