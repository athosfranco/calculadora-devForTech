let input = document.querySelector("#display");
let operador = "";
let parar = false;

//INPUT PELO TECLADO
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  const teclaPressionada = parseInt(e.key);

  const regexTesteSimbolos = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!isNaN(teclaPressionada)) {
    //pressionou um numero
    console.log(teclaPressionada);
    adicionarNum(teclaPressionada);

    //pressionou um operador
  } else if (regexTesteSimbolos.test(e.key)) {
    if (e.key === "=") {
      calcResultado();
    } else {
      adicionarOp(e.key);
    }

    //pressionou enter
  } else if (e.key === "Enter") {
    calcResultado();

    //pressionou Backspace
  } else if (e.key === "Backspace") {
    if (input.value.length > 1) {
      apagarUltimoInput();
    } else {
      limpar();
    }
  }
});

const limpar = () => {
  input.value = "";
  document.querySelector("#operacao").innerHTML = "";
  operador = "";
};

//ADICIONA UM NUMERO AO CALCULO
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

const apagarUltimoInput = () => {
  console.log(input.value);

  input.value = input.value.substring(0, input.value.length - 1);
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
    calcResultado();
    input.value = input.value + op;
    operador = op;
    parar = false;
  }
};

const calcResultado = () => {
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
