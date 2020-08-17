//-------------------PROBLEMA 1.1------------------------
import ClasseUsuario from './functions';

ClasseUsuario.info();


//-------------------PROBLEMA 1.2------------------------
import { idade } from './functions';

console.log(idade);


//-------------------PROBLEMA 1.3------------------------
import Usuario, { idade as IdadeUsuario } from './functions';

Usuario.info();
console.log(IdadeUsuario);