function vericaOccorencia(str) {
	if (typeof str !== "string") {
		console.log(" A entrada deve ser uma string");
		return;
	}

	//cria variavel para busca
	const strChave = "a";

	//Criando um array
	const srtArray = str
		.toLowerCase()
		.replace(/[àáäâã]/g, "a")
		.split("");

	//Verificando e somando occorencia
	let sum = 0;
	srtArray.forEach((i) => {
		if (i === strChave) {
			sum++;
		}
	});

	if (sum > 0) {
		console.log(
			`A letra ${strChave} foi encontrada ${sum} ${
				sum == 1 ? "vez" : "vezes"
			}.`
		);
	} else {
		console.log(`A letra ${strChave} não foi encontrada.`);
	}
}

vericaOccorencia("Estágio na Target");
