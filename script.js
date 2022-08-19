var input = document.querySelector("#display");
var operador = "";
var parar = false;

const limpar = () => {
  input.value = "";
  document.querySelector("#operacao").innerHTML = "";
  operador = "";
};

const adicionarNum = (string) => {
  if (!parar) {
    if ((string === "." && input.value.indexOf(".") === -1) || string !== ".") {
      input.value = input.value + string;
      history.value = input.value;
    }
  } else {
    if ((string === "." && input.value.indexOf(".") === -1) || string !== ".") {
      input.value = "";
      parar = false;
      document.querySelector("#operacao").innerHTML = "";
      operador = "";

      input.value = input.value + string;
    }
  }
};

//FUNÇÃO QUE ADICIONA O OPERADOR A SER UTILIZADO NO CALC MATEMATICO
const adicionarOp = (op) => {
  if (input.value == "") {
    input.value = "0";
  }

  if (operador == "") {
    operador = op;
    input.value = input.value + op;
  } else {
    total();
    input.value = input.value + op;
    operador = op;
    parar = false;
  }
};

const total = () => {
  if (!parar) {
    numeros = input.value.split(operador);

    if (numeros[1] == "") {
      input.value = input.value + "0";
      numeros[1] = 0;
    }

    document.querySelector("#operacao").innerHTML = input.value;

    switch (operador) {
      case "+":
        input.value = Number(numeros[0]) + Number(numeros[1]);
        break;

      case "-":
        input.value = numeros[0] - numeros[1];
        break;

      case "*":
        input.value = numeros[0] * numeros[1];
        break;

      case "/":
        input.value = numeros[0] / numeros[1];
        break;
    }

    parar = true;
  }
};
