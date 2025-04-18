



function cidade(RJ,SP,PB){
    const RJ = 350000
    const SP = 600000
    const PB = 259000
}

if cidade() > 30000 {
    let totalcidade = ('CIDADE GRANDE')
  
} else {
    let totalcidade = ('CIDADE PEQUENA')
   
    console.log(`A cidade de `cidade(RJ)` é uma ${totalcidade}`)
    console.log(`A cidade de `cidade(SP)` é uma ${totalcidade}`)
    console.log(`A cidade de `cidade(PB)`  é uma ${totalcidade}`)
}
