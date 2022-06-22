console.log('Conectado')

const div1 = document.querySelector('#div')
console.log(div1);

async function ObtenerDatos() {

    const response = await fetch("http://127.0.0.1:5500/Familia.json");
    let json = await response.json();

    console.log(json);

    json.Familia.forEach(element => {

        // div1.innerHTML  += ' <div> <h1>'+element.Nombres+'</h1> </div>         <div> <span>'+element.Edad+'</span> </div> <div> <span>'+element.Apellidos+'</span> </div> <div> <span>'+element.Profesion+'</span> </div>'




    });

    
}

ObtenerDatos();