function calcularNotaFiscal() {
	// Obter os valores dos campos do formulário
	var produto1_nome = document.getElementById("produto1").value;
	var produto1_valor = Number(document.getElementById("produto1_valor").value);
	var produto1_quantidade = Number(document.getElementById("produto1_quantidade").value);

	var produto2_nome = document.getElementById("produto2").value;
	var produto2_valor = Number(document.getElementById("produto2_valor").value);
	var produto2_quantidade = Number(document.getElementById("produto2_quantidade").value);

	var produto3_nome = document.getElementById("produto3").value;
	var produto3_valor = Number(document.getElementById("produto3_valor").value);
	var produto3_quantidade = Number(document.getElementById("produto3_quantidade").value);

	var produto4_nome = document.getElementById("produto4").value;
	var produto4_valor = Number(document.getElementById("produto4_valor").value);
	var produto4_quantidade = Number(document.getElementById("produto4_quantidade").value);

	var produto5_nome = document.getElementById("produto5").value;
	var produto5_valor = Number(document.getElementById("produto5_valor").value);
	var produto5_quantidade = Number(document.getElementById("produto5_quantidade").value);

	// Calcular o valor total de cada produto
	var produto1_total = produto1_valor * produto1_quantidade;
	var produto2_total = produto2_valor * produto2_quantidade;
	var produto3_total = produto3_valor * produto3_quantidade;
	var produto4_total = produto4_valor * produto4_quantidade;
	var produto5_total = produto5_valor * produto5_quantidade;

	// Calcular o valor total da nota fiscal
	var nota_fiscal_total = produto1_total + produto2_total + produto3_total + produto4_total + produto5_total;

	// Aplicar desconto de 5% para produtos com quantidade maior que 20
	if (produto1_quantidade > 20) {
		produto1_total = produto1_total * 0.95;
	}
	if (produto2_quantidade > 20) {
		produto2_total = produto2_total * 0.95;
	}
	if (produto3_quantidade > 20) {
		produto3_total = produto3_total * 0.95;
	}
	if (produto4_quantidade > 20) {
		produto4_total = produto4_total * 0.95;
	}
	if (produto5_quantidade > 20) {
		produto5_total = produto5_total * 0.95;
	}

	// Aplicar desconto de 10% para notas fiscais com valor total maior que 1000
	if (nota_fiscal_total > 1000) {
		nota_fiscal_total = nota_fiscal_total * 0.9;
	}

	// Mostrar o resultado na página
	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "Valor total do " + produto1_nome + ": R$" + produto1_total.toFixed(2) + "<br>";
	resultado.innerHTML += "Valor total do " + produto2_nome + ": R$" + produto2_total.toFixed(2) + "<br>";
	resultado.innerHTML += "Valor total do " + produto3_nome + ": R$" + produto3_total.toFixed(2) + "<br>";
	resultado.innerHTML += "Valor total do " + produto4_nome + ": R$" + produto4_total.toFixed(2) + "<br>";
	resultado.innerHTML += "Valor total do " + produto5_nome + ": R$" + produto5_total.toFixed(2) + "<br><br>";
	resultado.innerHTML += "Valor total da nota fiscal: R$" + nota}
