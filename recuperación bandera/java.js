const banderas = document.querySelector(".bandera")
const borrar = document.createElement("secction")
borrar.classList.add("borrar")

const peru =document.createElement("div")
peru.classList.add("per")
peru.textContent = ""
console.log(peru)

const rojo = document.createElement("div")
rojo.classList.add("rojo")

const blanco = document.createElement("div")
blanco.classList.add("blanco")

const rojo2 = document.createElement("div")
rojo2.classList.add("rojo2")

peru.appendChild(rojo)
peru.appendChild(blanco)
peru.appendChild(rojo2)

function insban1(){
    banderas.appendChild(borrar)
    banderas.appendChild(peru)
}


const argentina =document.createElement("div")
argentina.classList.add("arg")
argentina.textContent = ""
console.log(argentina)

const rceleste = document.createElement("div")
rceleste.classList.add("celeste")

const blanco1 = document.createElement("div")
blanco1.classList.add("blanco1")

const rceleste2 = document.createElement("div")
rceleste2.classList.add("celeste2")

argentina.appendChild(rceleste)
argentina.appendChild(blanco1)
argentina.appendChild(rceleste2)

function insban2(){
    banderas.appendChild(argentina)
}


const alemania =document.createElement("div")
alemania.classList.add("ale")
alemania.textContent = ""
console.log(alemania)

const negro = document.createElement("div")
negro.classList.add("negro")

const amarillo = document.createElement("div")
amarillo.classList.add("amarillo")

const rojo3 = document.createElement("div")
rojo3.classList.add("rojo3")

alemania.appendChild(negro)
alemania.appendChild(amarillo)
alemania.appendChild(rojo3)

 function insban3(){
    banderas.appendChild(alemania)
}


const francia =document.createElement("div")
francia.classList.add("fra")
francia.textContent = ""
console.log(francia)

const azul = document.createElement("div")
azul.classList.add("azul")

const blanco3 = document.createElement("div")
blanco3.classList.add("blanco3")

const rojo4 = document.createElement("div")
rojo4.classList.add("rojo4")

francia.appendChild(azul)
francia.appendChild(blanco3)
francia.appendChild(rojo4)

function insban4(){
    banderas.appendChild(francia)
}