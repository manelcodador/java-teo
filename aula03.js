// alguns erros: 

let numero = 12 // o javaS é sensivel ao CAPSLOCK
 //console.log(numero) // erro de declaração variável nao declarada

 // console.log numero : erro de sintaxe. falta de parenteses

 //tratamento de erros

 // console.error ('a lista nao esta executando a media') // declara um erro para outro usuario;

 const idademinima = 18
 let idadecliente = 17
 if(idadecliente >= idademinima) {
    console.log('cerveja')

 } else {
    console.log('suco')
 }

  // Valor ternário
  idadecliente = 20

  // modo ternario, __________ <= _________ ? _ _ _ _ _ _ ;  __  __ _  __  _
  //modo ternario, _________== _________ ? _  __  _ __ _ _ ; _ _ _ _ _ _ _ _
  console.log(idadecliente>= idademinima ? "cerveja" : "suco")

  //utilizar com cuidado

  const nome = "Manel"  
  const idade = 15
  const cidadenascimento = "foz do iguaçu"

  const apresentacao = "meu nome é" + nome + "tenho" + idade + "anos e nasci em" + cidadenascimento

  console.log(apresentacao)´

  // template string

  const apresentacao2 = ´sou o ${nome} e tenho ${idade} anos de idade. nasci na cidade de ${cidadenascimento}´
  console.log