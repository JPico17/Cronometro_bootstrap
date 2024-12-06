let iniciado = false; 
let horas = 0;
let minutos = 0;
let segundos = 0;

function iniciar_cronometro(){
    if(iniciado){
        detener_cronometro();
    }else{
        iniciado=true;
        cambiar_boton_iniciar();
        llamar_actualizar = setInterval(actualizar,1000);
    }
}

function detener_cronometro(){
    iniciado=false;
    cambiar_boton_iniciar();
    clearInterval(llamar_actualizar);
}

function reiniciar_cronometro(){
    iniciado=false;
    cambiar_boton_iniciar();
    clearInterval(llamar_actualizar);
    horas = 0;
    minutos = 0;
    segundos = -1;
    actualizar();
}

function actualizar(){
    var horasTexto, minutosTexto, segundosTexto;
    //Incrementemos segundos
    segundos++;
    if(segundos>59){minutos++, segundos=0;}
    if(minutos>59) {horas++; minutos=0;}
    if(horas>23){horas=0;}

    //usamos el operador ternario es equivalente a if:else
    segundos<10 ? segundosTexto="0"+segundos : segundosTexto=""+segundos;
    minutos<10 ? minutosTexto="0" + minutos : minutosTexto="" + minutos;
    horas<10 ? horasTexto="0" + horas : horasTexto="" + horas;
    
    document.getElementById("text_crono").innerText = horasTexto+":"+minutosTexto+":"+segundosTexto;
}

function cambiar_boton_iniciar(){
    boton = document.getElementById("iniciar_btn");
    if(iniciado){
        boton.innerText="Detener";
        boton.classList.remove("btn-success");
        boton.classList.add("btn-danger");
    } else {
        boton.innerText="Iniciar";
        boton.classList.remove("btn-danger");
        boton.classList.add("btn-success");
    }
}