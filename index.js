/* Mangler funksjonen FillFields */
const btns = document.querySelectorAll("button");
const fields = document.querySelectorAll(".field");

/* TODO:
Implementer Fill Fields. 

Skal ta inn fields, switche på id til hver field,
og fylle korresponding fields med verdien etter et fetch kall til url i button.value*/
btns.forEach((button) => {
    button.addEventListener("click", /* ()=>FillFields(fields, button.value) */)
})