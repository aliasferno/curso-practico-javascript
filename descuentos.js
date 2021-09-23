// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = ( precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal, 
//     descuento, 
//     porcentajePrecioConDescuento, 
//     precioConDescuento});

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ( precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

function onClickButtonPriceDiscount(){

const inputPrice = document.getElementById("InputPrice");
const priceValue = inputPrice.value;
const inputDiscount = document.getElementById("InputDiscount");
const discountValue = inputDiscount.value;

const precioConDesceunto = calcularPrecioConDescuento(priceValue, discountValue);

const resultP = document.getElementById("ResultPrice").innerText= "Test";

resultP.innerText = "Tu precio con descuento es de: $" + precioConDesceunto;

}