//Array da sequência
const sequenciaFibonacci = [0, 1];

function calcularFibonacci(n) {
	//Verificação da entrada
	if (typeof n !== "number" || typeof n == "undefined") {
		console.log("A entrada deve ser numérica");
		return;
	}

	//Soma e inclução  dos números da sequência
	for (i = 2; i < n + 1; i++) {
		sequenciaFibonacci.push(
			sequenciaFibonacci[i - 2] + sequenciaFibonacci[i - 1]
		);
	}
	console.log(sequenciaFibonacci);
	verificarSeConsta(n);
}

function verificarSeConsta(n) {
	//verifica se o numero consta na sequência
	if (sequenciaFibonacci.includes(n)) {
		console.log(`O número ${n}, está presente na sequência.`);
	} else {
		console.log(`O número ${n}, não está presente na sequência.`);
	}
}

calcularFibonacci(20);
