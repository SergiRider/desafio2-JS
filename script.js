const d = document
const img = d.querySelector("img")

border=["red 2px solid",""]
let borderIndex= 0
img.addEventListener("click", (e)=>{
    e.preventDefault()
    img.style.border=border[borderIndex]
    borderIndex=(borderIndex+1)% border.length
})



let contenedor=d.querySelector(".contenedor")
contenedor.addEventListener("submit",(e)=>{
    e.preventDefault()
    let cantidad1= parseInt(d.querySelector(".cantidad1").value)
    let cantidad2= parseInt(d.querySelector(".cantidad2").value)
    let cantidad3= parseInt(d.querySelector(".cantidad3").value)
   let mostrarResultado=d.querySelector(".resultado1")
   let pagar=d.querySelector("#button")

   let total= cantidad1+cantidad2+cantidad3
    
    if(total<=10&&total!=0){
        mostrarResultado.innerHTML=`
    <div class="resultadoFormulario">
    <p><span style="color:green">La cantidad total de tus productos es: ${total}</span></p>
    `
    pagar.disabled = false
    pagar.addEventListener("click", (e)=>{
        e.preventDefault()
        alert("Serás redirigido a otra página para finalizar la compra")
    })

  
    }else if(total>10){
        mostrarResultado.innerHTML=`
    <div class="resultadoFormulario">
    <p>La cantidad total de tus productos es: ${total}</p>
    <p><span style="color:red">No puedes ingresar más de 10</span></p>
    `
    pagar.disabled = true
    }else{
        pagar.disabled = true
        mostrarResultado.innerHTML=`
    <div class="resultadoFormulario">
    <p><span style="color:red">No ingresaste nada</span></p>
    `
    }
})

const pass1=d.querySelector("#pass1")
pass1.addEventListener("change", (e)=>{
    e.preventDefault()
})
const pass2=d.querySelector("#pass2")
pass2.addEventListener("change", (e)=>{
    e.preventDefault()
})
const pass3=d.querySelector("#pass3")
pass3.addEventListener("change", (e)=>{
    e.preventDefault()
})

let mostrarPass1=d.querySelector(".resultado2")

let verificador=d.querySelector("#btnVerificador")
verificador.addEventListener("click", (e)=>{
    e.preventDefault()
    let contraseñas=pass1.value+pass2.value+pass3.value
    if(pass1.value==9&&pass2.value==1&&pass3.value==1){
        mostrarPass1.innerHTML=`
    <div class="resultadoPass1">
    <span style="color:green"><p>La contraseña ${contraseñas[0]} * ${contraseñas[2]} ingresada es correcta</p>
    <p>password 1 correcto</p></span>
        `
}else if(pass1.value==7&&pass2.value==1&&pass3.value==4){
        mostrarPass1.innerHTML=`
        <div class="resultadoPass1">
        <span style="color:green"><p>La contraseña ${contraseñas[0]} * ${contraseñas[2]} ingresada es correcta</p>
        <p>password 2 correcto</p></span>
        `
    }else{
        mostrarPass1.innerHTML=`
        <div class="resultadoPass1">
        <span style="color:red"><p>La contraseña ${contraseñas[0]} * ${contraseñas[2]} no es correcta </p>
        <p>password incorrecto</p></span>
        `
    }
})