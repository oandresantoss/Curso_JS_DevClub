const cidades = [
    { nome: 'RJ', populacao: 350000 },
    { nome: 'SP', populacao: 600000 },
    { nome: 'PB', populacao: 259000 }
  ];
  
  function verificarTipoCidade(cidade) {
    if (cidade.populacao > 300000) {
      return 'CIDADE GRANDE';
    } else {
      return 'CIDADE PEQUENA';
    }
  }
  
  for (let i = 0; i < cidades.length; i++) {
    const tipo = verificarTipoCidade(cidades[i]);
    console.log(`A cidade ${cidades[i].nome} é uma: ${tipo}`);
  }
  