/* Buscando los valores de la URL con la propiedad  window.location.search de JavaScript */
 const paramURL = window.location.search
 /* console.log(paramURL); */

 //Creamos una instancia de URLSearchParams
 const parametrosURL = new URLSearchParams(paramURL);
 
 /*
 Para acceder a los parámetros de la URL crearemos un objeto de tipo URLSearchParams y 
 usaremos el método get() para obtener cada uno de los valores
 */
 const logo = parametrosURL.get('logo');
 const logotipo = logo.replace('|', '&');
 console.log(logotipo);
 document.querySelector("#logo").src = (logotipo);

 const tituloDoc = parametrosURL.get('numeroRegistro');
 document.querySelector("#tituloDoc").innerHTML = (tituloDoc);
 
 const empresa = parametrosURL.get('empresa');
 const direccion = parametrosURL.get('direccion');
 const numeroRegistro = parametrosURL.get('numeroRegistro');
 const fecha = parametrosURL.get('fecha');
 const nombreCliente = parametrosURL.get('nombreCliente');

 const canProducto = parametrosURL.get('canProducto');
 const Producto = parametrosURL.get('Producto');
 const precioProducto = parametrosURL.get('precioProducto');

 const subTotal = parametrosURL.get('subTotal');
 const otroDescuento = parametrosURL.get('otroDescuento');
 const impuesto = parametrosURL.get('impuesto');
 const descuento = parametrosURL.get('descuento');
 const totalPrecio = parametrosURL.get('totalPrecio');

 // formateamos a moneda Bs.
const formatSubTotal = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(subTotal);
const formatOtroDescuento = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(otroDescuento);
const formatImpuesto = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(impuesto);
const formatDescuento = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(descuento);
const formatTotalPrecio = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(totalPrecio);

 /*FUNCION PARA UNIR ARRAYS*/
 function unirArray(datos1, datos2, datos3) {
     let contenido = [datos1, datos2, datos3];

     return contenido.reduce(
         (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
         Array.from({
             length: Math.max(...contenido.map(d => d.length))
         }).map(d => [])
     );
 }
 /*Convertimos en array cantidad, item, precio*/
 const cantidad = canProducto.split(" , ");
 const item = Producto.split(" , ");
 const precio = precioProducto.split(" , ");

 //CREAR NUEVOS ARRAY FORMATEADO A MONEDAS
const precioN = []

precio.forEach((pU) => {    
    pU = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(pU)
    precioN.push(pU);
});

 const ventas = unirArray(cantidad, item, precioN);


 /* Mostrando mis parametros en mi HTML */
 const hempresa = document.querySelector("#empresa");
 hempresa.innerHTML = (empresa);

 const hdireccion = document.querySelector("#direccion");
 hdireccion.innerHTML = (direccion);

 const hnumeroRegistro = document.querySelector("#numeroRegistro");
 hnumeroRegistro.innerHTML = (numeroRegistro);

 const hfecha = document.querySelector("#fecha");
 hfecha.innerHTML = (fecha);

 const hnombreCliente = document.querySelector("#nombreCliente");
 hnombreCliente.innerHTML = (nombreCliente);

 document.querySelector("#subTotal").innerHTML = (formatSubTotal);

 document.querySelector("#otroDescuento").innerHTML = (formatOtroDescuento);

 document.querySelector("#impuesto").innerHTML = (formatImpuesto);

 document.querySelector("#descuento").innerHTML = (formatDescuento);

 document.querySelector("#totalPrecio").innerHTML = (formatTotalPrecio);

 /*URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ*/
 const tabla = document.getElementById("tablaProductos");             
 const cuerpoTabla = document.createElement('tbody');

 ventas.forEach(p => {

     
     let fila = document.createElement('tr');

     fila.innerHTML += `<td>${p[0]}</td>`

     fila.innerHTML += `<td class="tdProducto">${p[1]}</td>`

     fila.innerHTML += `<td class="tdPrecio">${p[2]}</td>`

     /*let td = document.createElement('td');
     td.innerText = p[0];
     fila.appendChild(td);

     td = document.createElement('td');
     td.innerText = p[1];
     fila.appendChild(td);

     td = document.createElement('td');
     td.innerText = p[2];
     fila.appendChild(td);*/

     cuerpoTabla.appendChild(fila);
 });

 tabla.appendChild(cuerpoTabla);
