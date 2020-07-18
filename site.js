// Instroducimos el objeto.

const product = { count: 3, price: 12.55, type: "ropa" };

/**
 * Vamos a crear una función getVat que recibe el producto y calcula el IVA (por unidad) aplicable dependiendo del tipo de producto:

Es decir:

Un producto sin IVA tiene un precio.
El precio total se saca multiplicando precio * iva (el iva puede ser: 0.1, 0.04, 0.21).
Dependiendo del campo "type" calculamos el precio total:
Si es "alimentacion": precio * 0.1
Si es "libro": precio * 0.04
Si es de cualquier otro tipo: precio * 0.21
 */
 

function getTotal(product) {
    
    return product.count > 0 ? product.count * product.price : 0;
}

function getVat(product){
    var vat;
    var priceVat;
    switch(product.type){
        case 'alimentacion':
            vat = 0.10;
            priceVat = product.price * vat;
        break;
        
        case 'libro':
            vat = 0.04;
            priceVat = product.price * vat;
        break;
        
        default:
            vat = 0.21;
            priceVat = product.price * vat;
        break;
    }
    return priceVat;
}

/**
 * Avanzado
 *Esto es un adelanteo del siguiente módulo: Utilizando la función anterior, 
 crearemos una para calcular el total de IVA (IVA por unidad multiplicado por cantidad):
 *Es decir una función que se llama getTotalVat(product) que devuelva el númer
 o de productos pedidos multiplacado por el precio con IVA.
*/

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
  }

/**
 * Mostrar resultado por consola
 *A partir de las funciones anteriores, vamos a crear una que recibe un producto,
  y realiza los calculos de total e IVA para mostrarlos por consola:
 */

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal.toFixed(2) + "€");
    console.log("IVA:", vat.toFixed(2) + "€");
    console.log("Total:", total.toFixed(2) + "€");
  }

printProductPrice(product);

/**
 * Calcular sueldo neto en nómina
Vamos a hacer una simulación de calculo de sueldo neto en nómina (este escenario es simplificado, desafío buscar legislación).

Partimos de:

Sueldo bruto año.
Número de hijos.
Número de pagas.
Tenemos la siguiente estrcutura:

const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14
}
Las condiciones:

Por rango de salario:
Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
Adicionalmente:
Si el empleado tiene hijos, restarle a la retencion 2 puntos.
Con esto sacaríamos el neto anual en nómina.

Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)
 */

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
  }

  let netoNominaAnual, netoNominaMensual, retencion, reduccionHijos;

// Calculamos si tiene o no retenciones por tener hijos

reduccionHijos = empleado.hijos > 0 ? 0.02 : 0;

// Desarrollamos el cálculo para calcular el neto anual.

if(empleado.bruto < 12000){
    netoNominaMensual = empleado.bruto / empleado.pagas;
    console.log(netoNominaMensual);

}else if(empleado.bruto >= 12000 && empleado.bruto < 24000){
    retencion = empleado.bruto * (0.08 - reduccionHijos);
    netoNominaAnual = empleado.bruto - retencion;
   
}else if(empleado.bruto >= 24000 && empleado.bruto < 34000){
    retencion = empleado.bruto * (0.16 - reduccionHijos);
    netoNominaAnual = empleado.bruto - retencion;
  
}else{
    retencion = empleado.bruto * (0.16 - reduccionHijos);
    netoNominaAnual = empleado.bruto - retencion;
}

// Y por último calculamos y sacamos por consola el neto mensual.

netoNominaMensual = netoNominaAnual / empleado.pagas;
console.log(`La nómina mensual es de: ${netoNominaMensual.toFixed(2)}€`);

