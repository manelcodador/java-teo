
let forma = 'retangulo';
let base = 20;
let altura = 40;


let area;
//condicional se... entao...

if(forma === 'retangulo'){
    area = altura * base;
    console.log(area);
 } else {
    area = (altura * base)/2;
    console.log(area);
 }

 //Boolean

 const usuariologado = true;
 const contapaga = false;
 
 // truly ou falsy
 // 0 -> false
 // 1 -> true

 console.log(0 == false); // retornar verdadeiro(true)
 console.log('' == false); // retornar verdadeiro (true)
 console.log(1 == true); // retorna verdadeiro (true)

 console.log(contapaga == 1);

 //undefined -> nao definido
 // null -> vazio ou nulo

 let minhavar;
 let varnull = null;
 let number = 3;
 let string = 'oi';
 


 console.log( typeof minhavar);
 console.log(typeof varnull);
 console.log(typeof number);
 console.log(typeof string);

 //conversao implicita

 const numeronumber = 786;
 const numerostring ="786";

 console.log(numeronumber == numerostring);
 console.log(numeronumber === numerostring);
 console.log(numeronumber + numerostring);

 // conversao explicita
 // number()
 // string()

 console.log(numeronumber + Number(numerostring));
 
 const numeroconvertido = Number(numerostring);

 console.log(numeronumber + numeroconvertido);

 const numeroconvertidoerrado = Number("786a");

 console.log(numeroconvertido + numeroconvertidoerrado);