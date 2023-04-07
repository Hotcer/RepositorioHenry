function vacaciones(x) {
    if (x === "EEUU") {              // =>CONDICIONAL
        console.log("Necesitamos dolares");  //=>INSTRUCCION 
    } else if (x === "Colombia") {    //ASI SUCESIVAMENTE PARA EL CONDICIONAL
        console.log("Necesitamos pesos");
    } else {
        console.log(" Con dolares de igual forma estamos bie, ya que en ese pais lo podemos cambiar")
    }
}
vacaciones("Mexico");


function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}
puedeManejar(15);

