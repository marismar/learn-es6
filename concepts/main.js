//------------------------PROBLEMA 1------------------------
class Usuario { //conceito de classes
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin() {
        return this.admin;      //retorna se o usuário é administrador
    }
}

class Admin extends Usuario {   //conceito de extensão entre classes
    constructor(email,senha) {
        super(email, senha);    //executa o construtor da classe pai
        this.admin = true;      //altera a propriedade admin para verdadeira
    }
}

const user1 = new Usuario('email@teste.com', 'senha123');
const admin1 = new Admin('email@teste.com', 'senha123');   

console.log(user1.isAdmin()); //false
console.log(admin1.isAdmin()); //true


//------------------------PROBLEMA 2------------------------
const usuarios = [
    { nome: 'Marismar', idade: 22, empresa: 'LMI' },
    { nome: 'Mirele', idade: 20, empresa: 'Fuze' },
    { nome: 'Diego', idade: 30, empresa: 'Rocketseat' },
];

const idades = usuarios.map((item) => item.idade);

console.log(idades);

const usuariosRocket = usuarios.filter((item) => {
    if(item.idade >= 18 && item.empresa === 'Rocketseat') {
        return item;
    }
});

console.log(usuariosRocket);

const usuariosGoogle = usuarios.find((item) => item.empresa === 'Google');

console.log(usuariosGoogle);

usuarios.map((item) => item.idade = item.idade * 2);

console.log(usuarios.filter((item) => {
    if(item.idade <= 50) return item;
}));


//------------------------PROBLEMA 3------------------------
const arr = [1, 2, 3, 4, 5, 6]
arr.map((item, index, arr) => arr[index] = item + 10);
console.log(arr);

const usuario = { nome: 'Marismar', idade: 22 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const nome1 = 'Marismar';
const idade1 = 22;
const mostraUsuario = (nome1 = 'Marismar', idade1 = 22) => {return { nome1, idade1 }};
console.log(mostraUsuario(nome1, idade1));
console.log(mostraUsuario(nome1));

const promise = () => {
    return new Promise((resolve, reject) => resolve());
};


//------------------------PROBLEMA 4------------------------
const empresa = {
    nome: 'Rocketseat',
    idade: 22,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, idade, endereco: { cidade, estado } } = empresa; //conceito de desestruturação

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);


//------------------------PROBLEMA 5------------------------
const [x, ...y] = arr;  //conceito de REST
console.log(x); //x é igual ao primeiro elemento de arr
console.log(y); //y é igual ao restante dos elementos de arr

function soma(...params) {  //recebe inúmeros parâmetros
    return params.reduce((total, next) => total + next);    //retorna a soma dos parâmetros
}

console.log(soma(1, 3, 4));

const usuario1 = {
    nome: 'Marismar',
    idade: 22,
    endereco: {
        cidade: 'João Pessoa',
        uf: 'PB',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };  //conceito de spread
const usuario3 = { ...usuario1, nome: 'Lontras' };  //importa todas as propriedade do usuario1 porem muda o nome 

console.log(usuario2, usuario3);


//------------------------PROBLEMA 6------------------------
function mostraInfo({ nome, idade }) {  //conceito de desestruturação em parâmetros
    return `${nome} tem ${idade} anos.`;//conceito de template literals
}

console.log(mostraInfo(usuario));


//------------------------PROBLEMA 7------------------------
const usuario4 = {  //conceito de sintaxe curta de objeto
    nome,
    cidade: 'Rio do sul',
}; //quando o nome da propriedade é igual a variavel de valor, não precisa repetir a informação

console.log(usuario4);




