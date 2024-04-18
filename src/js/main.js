
// #DECLARACIÓN STRINGS

const opcion1 = "Hola mundo"
const opcion2 = String("Hola mundo")
const opcion3 = new String("Hola mundo")

console.log(opcion1)
console.log(opcion2)
console.log(opcion3)


// # Extracción de datos

const message = "Este es un mensaje para pruebas"
document.write(message) //Imprime en la página

// #Extraer cantidad caracteres

console.info(message.length)
console.info(message[1])
console.info(message.charAt(1))
console.info(message.search("mensaje"))
console.info(message.includes("Este es un mensaje de prueba"))
console.info(message.startsWith("Este"))
console.info(message.endsWith("pruebas."))


// #Interpolación de cadenas o concatenación

const messageOne = "Este es un mensaje para"
const messageTwo = "practicar concatenación"

console.info(messageOne)
console.info(messageTwo)

console.info("option 1 (+) "+ messageOne + " " + messageTwo)
console.info("option 2 (,)", messageOne, messageTwo)
console.info(`option 3 (\`) ${messageOne} ${messageTwo}`)
console.info("option 4 concat()",messageOne.concat(" ").concat(messageTwo))
console.info("option 5 concat()",messageOne.concat(" ", messageTwo))

const fullName = ("Marlon Stiven Peña Naranjo")
const header = `
<header>
<h1>Hola mundo, mi nombre es ${fullName}</h1> 
</header>
`// crear elementos en HTML desde JS
document.write(header)


// DEPURACION DE STRINGS

const depMessage = "HolA coMo eSTas"

document.write(depMessage)

console.info(depMessage.toLowerCase())

console.info(depMessage.toUpperCase())

// ELIMINAR ESPACIOS DE MÁS

const email = "     marlono1naranjo@gmail.com       "

console.log(email)
console.log(email.trim())
console.log(email.trimEnd())
console.log(email.trimStart())


// FRAGMENTACIÓN DE STRINGS

const anitaMessage = "Anita lava la tina porque se portó mal"
console.info(anitaMessage)
console.info(anitaMessage.substring(9))
console.info(anitaMessage.substring(0,10)) //substring solo strings

console.info(anitaMessage.slice(9))
console.info(anitaMessage.slice(0,10)) //slice strings y listas

console.info(anitaMessage.replace("a","e")) // Solo la primera coincidencia
console.info(anitaMessage.replaceAll("a","e")) // Todas las coincidencias, valida mayusculas y minusculas
console.info(anitaMessage.replaceAll(/[aeiou]/g,"p")) 


//RELLENO DE STRINGS

const rellMessage = "Riwi - "

document.write(rellMessage.repeat(100))
console.info(rellMessage.repeat(10))
console.info(rellMessage.padStart(20, "*"))
console.info(rellMessage.padEnd(20, "*"))


//DESTRUCCIÓN TOTAL STRING

const desMessage = "En Riwi todos somos una familia"

document.write(desMessage)

console.table(desMessage.split(""))
console.table(desMessage.split(" "))
console.table(desMessage.split(" ", 2))