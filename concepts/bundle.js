"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//------------------------PROBLEMA 1------------------------
var Usuario = /*#__PURE__*/function () {
  //conceito de classes
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin; //retorna se o usuário é administrador
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  //conceito de extensão entre classes
  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha); //executa o construtor da classe pai

    _this.admin = true; //altera a propriedade admin para verdadeira

    return _this;
  }

  return Admin;
}(Usuario);

var user1 = new Usuario('email@teste.com', 'senha123');
var admin1 = new Admin('email@teste.com', 'senha123');
console.log(user1.isAdmin()); //false

console.log(admin1.isAdmin()); //true
//------------------------PROBLEMA 2------------------------

var usuarios = [{
  nome: 'Marismar',
  idade: 22,
  empresa: 'LMI'
}, {
  nome: 'Mirele',
  idade: 20,
  empresa: 'Fuze'
}, {
  nome: 'Diego',
  idade: 30,
  empresa: 'Rocketseat'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var usuariosRocket = usuarios.filter(function (item) {
  if (item.idade >= 18 && item.empresa === 'Rocketseat') {
    return item;
  }
});
console.log(usuariosRocket);
var usuariosGoogle = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(usuariosGoogle);
usuarios.map(function (item) {
  return item.idade = item.idade * 2;
});
console.log(usuarios.filter(function (item) {
  if (item.idade <= 50) return item;
})); //------------------------PROBLEMA 3------------------------

var arr = [1, 2, 3, 4, 5, 6];
arr.map(function (item, index, arr) {
  return arr[index] = item + 10;
});
console.log(arr);
var usuario = {
  nome: 'Marismar',
  idade: 22
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
var nome1 = 'Marismar';
var idade1 = 22;

var mostraUsuario = function mostraUsuario() {
  var nome1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Marismar';
  var idade1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 22;
  return {
    nome1: nome1,
    idade1: idade1
  };
};

console.log(mostraUsuario(nome1, idade1));
console.log(mostraUsuario(nome1));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //------------------------PROBLEMA 4------------------------


var empresa = {
  nome: 'Rocketseat',
  idade: 22,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    idade = empresa.idade,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado; //conceito de desestruturação

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado); //------------------------PROBLEMA 5------------------------

var x = arr[0],
    y = arr.slice(1); //conceito de REST

console.log(x); //x é igual ao primeiro elemento de arr

console.log(y); //y é igual ao restante dos elementos de arr

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //recebe inúmeros parâmetros
  return params.reduce(function (total, next) {
    return total + next;
  }); //retorna a soma dos parâmetros
}

console.log(soma(1, 3, 4));
var usuario1 = {
  nome: 'Marismar',
  idade: 22,
  endereco: {
    cidade: 'João Pessoa',
    uf: 'PB',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Gabriel'
}); //conceito de spread


var usuario3 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Lontras'
}); //importa todas as propriedade do usuario1 porem muda o nome 


console.log(usuario2, usuario3); //------------------------PROBLEMA 6------------------------

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  //conceito de desestruturação em parâmetros
  return "".concat(nome, " tem ").concat(idade, " anos."); //conceito de template literals
}

console.log(mostraInfo(usuario)); //------------------------PROBLEMA 7------------------------

var usuario4 = {
  //conceito de sintaxe curta de objeto
  nome: nome,
  cidade: 'Rio do sul'
}; //quando o nome da propriedade é igual a variavel de valor, não precisa repetir a informação

console.log(usuario4);
