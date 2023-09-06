/* Buscando los valores de la URL con la propiedad  window.location.search de JavaScript */
const paramURL = window.location.search
/* console.log(paramURL); */

//Creamos una instancia de URLSearchParams
const parametrosURL = new URLSearchParams(paramURL);

/*
Para acceder a los parámetros de la URL crearemos un objeto de tipo URLSearchParams y 
usaremos el método get() para obtener cada uno de los valores
*/

//-----------COLORES PARA EL FORMULARIO ----------------------
const fcolor = parametrosURL.get('colorPDF');


if (fcolor == "Red") {
    var ths = document.getElementsByTagName("th");
    var ct = document.getElementById("colum_total");
    var fc = document.getElementById("content_info_registro");
    var fp = document.getElementById("precios");

    ct.style.backgroundColor = "#f04c1a";
    fp.style.borderColor =  "#f04c1a";
    fc.style.backgroundColor = "#FFFAF8";
    fp.style.backgroundColor = "#FFFAF8";    

    for (var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#f04c1a";
    }

} else if (fcolor == "Blue") {
    var ths = document.getElementsByTagName("th");
    var ct = document.getElementById("colum_total");
    var fc = document.getElementById("content_info_registro");
    var fp = document.getElementById("precios");

    ct.style.backgroundColor = "#00a8f4";
    fp.style.borderColor =  "#00a8f4";
    fc.style.backgroundColor = "#F5FBFF";
    fp.style.backgroundColor = "#F5FBFF";    

    for (var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#00a8f4";
    }

} else if (fcolor == "Green") {
    var ths = document.getElementsByTagName("th");
    var ct = document.getElementById("colum_total");
    var fc = document.getElementById("content_info_registro");
    var fp = document.getElementById("precios");

    ct.style.backgroundColor = "#32DE88";
    fp.style.borderColor =  "#32DE88";
    fc.style.backgroundColor = "#EBFFF5";
    fp.style.backgroundColor = "#EBFFF5";    

    for (var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#32DE88";
    }

} else if (fcolor == "Orange") {
    var ths = document.getElementsByTagName("th");
    var ct = document.getElementById("colum_total");
    var fc = document.getElementById("content_info_registro");
    var fp = document.getElementById("precios");

    ct.style.backgroundColor = "#FF8500";
    fp.style.borderColor =  "#FF8500";
    fc.style.backgroundColor = "#FFF5EB";
    fp.style.backgroundColor = "#FFF5EB";    

    for (var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#FF8500";
    }

} else if (fcolor == "Yellow") {
    var ths = document.getElementsByTagName("th");
    var ct = document.getElementById("colum_total");
    var fc = document.getElementById("content_info_registro");
    var fp = document.getElementById("precios");
    var tTotal = document.getElementById("tTotal");
    var ctotal = document.getElementById("total");

    ctotal.style.color = "#313131";
    tTotal.style.color = "#313131";
    ct.style.backgroundColor = "#FFE000";
    ct.style.color = "#313131";
    fp.style.borderColor =  "#FFE000";
    fc.style.backgroundColor = "#FFFCE4";
    fp.style.backgroundColor = "#FFFCE4";    

    for (var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#FFE000";
        ths[i].style.color = "#313131";
    }   

} else {

    var ths = document.getElementsByTagName("th");
    var ct = document.getElementById("colum_total");
    var fc = document.getElementById("content_info_registro");
    var fp = document.getElementById("precios");

    ct.style.backgroundColor = "#151D24";
    fp.style.borderColor =  "#151D24";
    fc.style.backgroundColor = "#F9F9F9";
    fp.style.backgroundColor = "#F9F9F9";    

    for (var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#151D24";
    }
    
}

//-----------DATOS EMPRESA----------------------
const logo = parametrosURL.get('logo');
const logotipo = logo.replace('|', '&');

const empresa = parametrosURL.get('empresa');
const sucursal = parametrosURL.get('sucursal');
const telefono = parametrosURL.get('telefono');
const nit = parametrosURL.get('nit');
const direccion = parametrosURL.get('direccion');
/* Mostrando parametros en mi HTML */
document.querySelector("#logo").src = (logotipo);
document.querySelector("#empresa").innerHTML = (empresa);
document.querySelector("#sucursal").innerHTML = (sucursal);
document.querySelector("#telefono").innerHTML = (telefono);
document.querySelector("#nit").innerHTML = (nit);
document.querySelector("#direccion").innerHTML = (direccion);

//-----------DATOS CLIENTES----------------------
const codigoCliente = parametrosURL.get('codigoCliente');
const nombreCliente = parametrosURL.get('nombreCliente');
const telefonoCliente = parametrosURL.get('telefonoCliente');
const puntosCliente = parametrosURL.get('puntosCliente');
const puntosTotalCliente = parametrosURL.get('puntosTotalCliente');
/* Mostrando parametros en mi HTML */
document.querySelector("#codigoCliente").innerHTML = (codigoCliente);
document.querySelector("#nombreCliente").innerHTML = (nombreCliente);
document.querySelector("#telefonoCliente").innerHTML = (telefonoCliente);
document.querySelector("#puntosCliente").innerHTML = (puntosCliente);
document.querySelector("#puntosTotalCliente").innerHTML = (puntosTotalCliente);

//-----------DATOS REGISTRO----------------------
const numeroRegistro = parametrosURL.get('numeroRegistro');
const tituloDoc = parametrosURL.get('numeroRegistro');
const fechaRegistro = parametrosURL.get('fechaRegistro');
const usuario = parametrosURL.get('usuario');
const telefonoUsuario = parametrosURL.get('telefonoUsuario');
/* Mostrando parametros en mi HTML */
document.querySelector("#tituloDoc").innerHTML = (tituloDoc);
document.querySelector("#numeroRegistro").innerHTML = (numeroRegistro);
document.querySelector("#fechaRegistro").innerHTML = (fechaRegistro);
document.querySelector("#usuario").innerHTML = (usuario);
document.querySelector("#telefonoUsuario").innerHTML = (telefonoUsuario);

//-----------DATOS TABLA PRODUCTOS----------------------
const canProducto = parametrosURL.get('canProducto');
const codigoProducto = parametrosURL.get('codigoProducto');
const Producto = parametrosURL.get('Producto');
const serialNumero = parametrosURL.get('serialNumero');
const precioUnitario = parametrosURL.get('precioUnitario');
const precioTotal = parametrosURL.get('precioTotal');


/*FUNCION PARA UNIR ARRAYS*/
function arrayProductos(datos1, datos2, datos3, datos4, datos5, datos6) {
    let contenido = [datos1, datos2, datos3, datos4, datos5, datos6];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}
//Convertimos en array cantidad, item, precio
const cantidadProducto = canProducto.split(" , ");
const codigoP = codigoProducto.split(" , ");
const nombreProducto = Producto.split(" , ");
const serial = serialNumero.split(" , ");
const precioU = precioUnitario.split(" , ");
const precioT = precioTotal.split(" , ");

//CREAR NUEVOS ARRAY FORMATEADO A MONEDAS
const precioUN = [];
const precioTN = [];

precioU.forEach((pU) => {    
    pU = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(pU)
    precioUN.push(pU);
});

precioT.forEach((pU) => {    
    pU = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(pU)
    precioTN.push(pU);
});

//VARIABLE CON EL NUEVO ARRAY DE TODOS LOS ARRAY
const ventas = arrayProductos(cantidadProducto, codigoP, nombreProducto, serial, precioUN, precioTN);

/* Mostrando parametros en mi HTML */
/* URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ */
const tabla = document.getElementById("tabla_producto");
const cuerpoTabla = document.createElement('tbody');

ventas.forEach(p => {
    let fila = document.createElement('tr');

    fila.innerHTML += `<td class="tdCan">${p[0]}</td>`
    fila.innerHTML += `<td class="tdCodigoP">${p[1]}</td>`
    fila.innerHTML += `<td class="tdProducto">${p[2]}</td>`    
    fila.innerHTML += `<td class="tdSerial">${p[3]}</td>`
    fila.innerHTML += `<td class="tdPrecioU">${p[4]}</td>`
    fila.innerHTML += `<td class="tdTotal">${p[5]}</td>`

    cuerpoTabla.appendChild(fila);
});
tabla.appendChild(cuerpoTabla);

//-----------DATOS PRECIOS CAJA----------------------
const subTotal = parametrosURL.get('subTotal');
const otroDescuento = parametrosURL.get('otroDescuento');

const total = parametrosURL.get('total');
// formateamos a moneda Bs.
const formatSubT = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(subTotal);
const formatOtroDes = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(otroDescuento);

const formatTotal = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(total);

// Mostrando parametros en mi HTML
document.querySelector("#subTotal").innerHTML = (formatSubT);
document.querySelector("#otroDescuento").innerHTML = (formatOtroDes);

document.querySelector("#total").innerHTML = (formatTotal);

//-----------DATOS PAGOS----------------------
const pagado = parametrosURL.get('pagado');
const pago = parametrosURL.get('pago');
const tipoPago = parametrosURL.get('tipoPago');
const fechaPago = parametrosURL.get('fechaPago');
/*FUNCION PARA UNIR ARRAYS*/
function arrayPagos(datos1, datos2, datos3, datos4) {
    let contenido = [datos1, datos2, datos3, datos4];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}
//Convertimos en array cantidad, item, precio
const pagadoP = pagado.split(" , ");
const pagoP = pago.split(" , ");
const tipoPagoP = tipoPago.split(" , ");
const fechaPagoP = fechaPago.split(" , ");

const tablaPagos = arrayPagos(pagadoP, pagoP, tipoPagoP, fechaPagoP);
console.log(tablaPagos)
// Mostrando parametros en mi HTML
/* URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ */
const tablaP = document.getElementById("tabla_pagos");
const bodyPagos = document.createElement('tbody');

tablaPagos.forEach(p => {
    let fila = document.createElement('tr');

    fila.innerHTML += `<td class="pagado">${p[0]}</td>`
    fila.innerHTML += `<td>${p[1]}</td>`
    fila.innerHTML += `<td>${p[2]}</td>`
    fila.innerHTML += `<td>${p[3]}</td>`

    bodyPagos.appendChild(fila);
});
tablaP.appendChild(bodyPagos);

//-----------DATOS FALTANTE----------------------
const faltante = parametrosURL.get('faltante');
//Formatea a moneda
const formatFaltante = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(faltante);
// Mostrando parametros en mi HTML
document.querySelector("#faltante").innerHTML = (formatFaltante);

//-----------DATOS ESTADO----------------------
const estadoR = parametrosURL.get('estado');
// Mostrando parametros en mi HTML
document.querySelector("#estadoRegistro").innerHTML = (estadoR);

//-----------DATOS FIRMAS----------------------
const firmaNombreCliente = parametrosURL.get('nombreCliente');
const firmaNombrePropietario = parametrosURL.get('firmaNombrePropietario');
// Mostrando parametros en mi HTML
document.querySelector("#firmaNombreCliente").innerHTML = (firmaNombreCliente);
document.querySelector("#firmaNombrePropietario").innerHTML = (firmaNombrePropietario)

//-----------DATOS TENGA EN CUENTA----------------------
const tengaEnCuenta = parametrosURL.get('tengaEnCuenta');
// Mostrando parametros en mi HTML
document.querySelector("#tengaEnCuenta").innerHTML = (tengaEnCuenta);

