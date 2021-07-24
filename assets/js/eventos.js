// INICIO DE EVENTOS FORMULARIO SOLICITUD DE SEGURO
function form1Event() {
    document.getElementById("form1Event").style.display = 'none';
    document.getElementById("form2Event").style.display = 'block';
}

function form2Event() {
    document.getElementById("form2Event").style.display = 'none';
    document.getElementById("form1Event").style.display = 'block';
}

function form3Event() {
    document.getElementById("form2Event").style.display = 'none';
    document.getElementById("form3Event").style.display = 'block';
}

function form4Event() {
    document.getElementById("form3Event").style.display = 'none';
    document.getElementById("form2Event").style.display = 'block';
}

function form5Event() {
    document.getElementById("Titulo1").style.display = 'none';
    document.getElementById("form3Event").style.display = 'none';
    document.getElementById("Titulo2").style.display = 'block';
    document.getElementById("form4Event").style.display = 'block';
}

function form6Event() {
    document.getElementById("Titulo2").style.display = 'none';
    document.getElementById("form4Event").style.display = 'none';
    document.getElementById("Titulo1").style.display = 'block';
    document.getElementById("form3Event").style.display = 'block';
}

function form7Event() {
    document.getElementById("form4Event").style.display = 'none';
    document.getElementById("form5Event").style.display = 'block';
}

function form8Event() {
    document.getElementById("form5Event").style.display = 'none';
    document.getElementById("form4Event").style.display = 'block';
}

function cotizar() {
    window.location="/cotizacionVehiculo.html";
}
// FIN DE EVENTOS FORMULARIO SOLICITUD DE SEGURO

// INCIO DE EVENTOS FORMULARIO COTIZACION VEHICULO
function btnDetalleTables() {
    if(document.getElementById("estado").value == "hide")
    {
        document.getElementById("estado").value = "block"
        document.getElementById("detalleTables").style.display = 'block';
    } 
    else
    {
        document.getElementById("estado").value = "hide"
        document.getElementById("detalleTables").style.display = 'none';
    }
}
// FIN DE EVENTOS FORMULARIO COTIZACION VEHICULO

// INCIO DE EVENTOS REGISTRO USUARIO
function siguienteRegistro() {
    document.getElementById("formUno").style.display = "none"
    document.getElementById("btnFormUno").style.display = 'none';
    document.getElementById("formDos").style.display = "block"
    document.getElementById("btnFormDos").style.display = 'block';
}volverRegistro

function volverRegistro() {
    document.getElementById("formDos").style.display = "none"
    document.getElementById("btnFormDos").style.display = 'none';
    document.getElementById("formUno").style.display = "block"
    document.getElementById("btnFormUno").style.display = 'block';
}
// FIN DE EVENTOS REGISTRO USUARIO