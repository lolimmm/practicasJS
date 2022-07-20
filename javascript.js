window.addEventListener('load', inicializar, false);  // Espera a que cargue el documento 

function inicializar(){

    // Ponemos a la caja (div), el color que por defecto tenga seleccionado el select 
    document.getElementById("capaColor").style.background = document.getElementById("color").value;
    // document.getElementById("capaColor").style.background = document.getElementsByTagName("select").value;

    // Al pulsar en enviar se ejecuta la función validar()
    document.getElementById("enviar").onclick = validar; // evento click en el botón enviar

    // Al cambiar la opción del select se ejecuta la función
    // La cuál recoge el valor seleccionado y lo añade al color de fondo de la caja
    document.getElementById("color").addEventListener("change",function(){
        valorSeleccionado = document.getElementById("color").value; // Guardamos el valor seleccionado (color) en la variable 
        document.getElementById("capaColor").style.background = valorSeleccionado; // Cambiamos el estilo de la caja, el color es el valor seleccionado
        //document.getElementById("resultado").innerHTML += valorSeleccionado + "<br>"; 
    }, true);

    
    

    // Función validar()
    function validar(e){
        
        let devolver; // Boleano

        // Si las siguientes funciones son verdaderas 
        if(validarnick() && confirm("¿Deseas enviar el formulario?")){       
            e.preventDefault(); // evita enviar el formulario
            document.getElementById("resultado").innerHTML = mostrarDatos(); // Se muestra el valor del input 
            devolver=true;
        }else{
            e.preventDefault();
            document.getElementById("resultado").innerHTML = "Los datos no son correctos." +
            "</br>Debe contener entre 8 y 20 caracteres, comenzando por una letra mayúscula, seguida de minúsculas, " +
            "seguido de @ y que finalice en dos dígitos.";
            devolver=false;
        }
        return(devolver); // retorna verdadero o falso
    }



    // Valida el nick
    function validarnick(){
        let devolver = true;
        let patron = /(?=^[A-ZÑ][a-zñ]+@\d{2}$)(^.{8,20}$)/; // Expresión regular (RegExp)

        if(patron.test(document.getElementById("nick").value)){ // Testeamos el patrón 
            document.getElementById("nick").className = ""; // Se borra la clase que hubiera
            document.getElementById("nick").className = "verde";
            devolver=true;
        }else{
            document.getElementById("nick").className = "rojo";  // Se añade el color de fondo rojo
            devolver = false;
        }
        return(devolver);
    }


    // Función que devuelve el valor del input, select y radio
    function mostrarDatos(){
        /*let edad = document.getElementsByName("edad"); // se almacena todos los input de name:edad
        for(let i=0; i<edad.length; i++){
            if(edad[i].checked){ // si este input está seleccionado
                edad=edad[i].value;
            }
        }*/
        
        //Sacamos el valor del radio que esté seleccionado
        let edad = document.querySelector('input[name=edad]:checked').value; // Esto es lo mismo que con el for de arriba

        let anios = document.getElementById("anyos").value;

        let devolver =""; 

        devolver += "Mi nombre es " + document.getElementById("nick").value +
        ".</br> Tengo " + anios + " años." +
        "</br> Soy " + edad + " de edad." + 
        "</br>Mi color favorito es el " + document.getElementById("color").value; 
        
        return(devolver); // Se retorna
    }
}