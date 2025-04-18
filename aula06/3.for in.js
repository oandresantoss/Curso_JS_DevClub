



const users = {
    nome: 'André',
    idade: 33,
    street: "Rua do Tota"
}

for(let key in users){
    console.log(`${key} : ${users[key]}`)
}