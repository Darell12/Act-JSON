console.log('Conectado')

const div = document.querySelector('#contenedor');
console.log(div);


async function ObtenerDatos() {

    const response = await fetch("Familia.json");
    let json = await response.json();

    console.log(json);

    

    json.Familia.forEach(element => {

        div.innerHTML += '<div class="card"><div class="cover"><img src="'+element.URL+'" alt=""> <div class="img__back"></div> </div> <div class="description"> <h2>'+element.Nombres+'</h2> <p>'+element.Apellidos+'<BR> EDAD: '+element.Edad+' <BR> PROFESIÓN: '+element.Profesion+'</p></div> </div>';
    });


}

ObtenerDatos();




