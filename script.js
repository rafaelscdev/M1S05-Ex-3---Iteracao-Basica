const prompt = require('prompt-sync')({sigint: true})
const numeros = []

for(let i =0; i<5; i++){
    numeros.push(parseInt(prompt(`Digite o ${i + 1}o número: `)))
}

for(let i =0; i<5; i++){
    console.log(`O ${[i+1]}o número é: ${numeros[i]}`);
}