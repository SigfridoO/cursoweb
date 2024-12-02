let numero1 = 5;
let numero2 = 6;

console.log(numero1 + numero2);

caja = document.getElementById("caja");
console.log(caja);

const profesores = ["Badillo", "Valente", "Sigfrido"];

caja.addEventListener('click', 
    
    
    
    () => {
    console.log("Se ha presionado la caja");
    let html = ``;
    profesores.forEach(profesor => {
        ;
        html += `<p>${profesor}</p>`
    })
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = html;

}

)