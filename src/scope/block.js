//let, var, const

//Las variables definidas dentro de un bloque solo pueden ser usadas en ese bloque
function fruits() {
  if (true) {
    //soy un bloque
    var fruitOne = "apple"; //function Scope
    let fruitTwo = "Kiwi"; //block Scope
    const fruitThree = "Banana"; //block Scope

    console.log(fruitTwo);
    console.log(fruitThree);
  }

  console.log(fruitOne);
}

fruits();
