let buttons = Array.from(document.getElementsByTagName('button'));

buttons.map(button => {
  button.addEventListener('click', (clicado) => {
    switch(clicado.target.id){
      case 'imprimir':
        imprimir(name)
        break;
      case  'buscarVocal':
        buscarVocal(otroNombre);
        break;
      case 'numLetras':
        numLetras(otroNombre);
        break;
      case 'fusionNombres':
        fusionNombres(name, surname);
        break;
      case 'buscarEmails':
        buscarEmails();
        break;
      default: 
      console.log('no hay funcion')
      break;
    }
  })
})




const name = ['F', 'r', 'a', 'n'];
let surname = ['A', 'r','i', 'ñ', 'o'];
let otroNombre = ['h', 'o', 'l', 'u', 'i', 'a', 'e', 'o', 'a', 'a', 'a', 'e','e','f','c','f','y'];

let screen = document.getElementsByClassName('display');
//Ex 1
function imprimir(nombre) {
  //console.log(nombre)
 for (let i = 0; i < nombre.length; i++){
 console.log(nombre[i]);
 }
}
//Ex 2
function buscarVocal (nombree) {
 
 let scanWord = nombree.join('').toLowerCase().split('');
 for (let i = 0; i < nombree.length; i++){
   if (nombree[i] == 'a' || nombree[i] == 'e' || nombree[i] == 'i' || nombree[i] == 'o' || nombree[i] == 'u'  ){
       console.log('He trobat la vocal '+  nombree[i]);
   }
   else {
     console.log('He trobat la consonant '+  nombree[i]);
   }
 }
}
 //Ex 3 
 
 function numLetras (palabra) {

  var object = {}
 
 	palabra.map(function(letra){
   
  	//console.log(object[letra])
  		if (object[letra]){
      	
        object[letra] += 1;
        console.log(object[letra]+" hola");
        console.log(object);
        }else {
          object[letra] = 1;
            console.log(object[letra])
    console.log(object);
        }
  		
  })
  console.log(object);
 } 
 
 
 //Ex 4

 function fusionNombres(name, surname){
   let fullName = [];
   let nombre = name;
   const apellido = surname;
   console.log(nombre)
   nombre.push(' ');
   fullName = name.concat(apellido)
    console.log(fullName)
    alert('Mi nombre completo es: '+ fullName.join('') +'.')
    
 }
 //Nivell 2


 function buscarEmails(){



//let emailRegex = /([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9\-])+\.+[a-zA-Z]/gi;
let emailRegex = /([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9\-\ñ])+\.+es/gi;
 var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
 let result = str.match(emailRegex)
 const catchedEmails = [] 
  result.map(emailCatched => catchedEmails.push(emailCatched)
  );

  const uniqueSet = new Set(catchedEmails);
  const uniqueCatchedEmails = [...uniqueSet]


  uniqueCatchedEmails.forEach(element => {
    console.log(element)
    
  });

    
  

 alert(uniqueCatchedEmails)
}

//imprimir(name);
//buscarVocal(otroNombre);
//numLetras(otroNombre);
//fusionNombres(name,surname);



