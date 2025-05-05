function resolverEquacao() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultadoDiv.innerHTML = "Por favor, preencha todos os campos com números válidos.";
    return;
  }

  if (a === 0) {
    resultadoDiv.innerHTML = "O valor de 'a' deve ser diferente de 0 (não é uma equação quadrática).";
    return;
  }

  const delta = b * b - 4 * a * c;

  let resultadoTexto = `Δ = ${delta}<br/>`;

  if (delta < 0) {
    resultadoTexto += "Não existem raízes reais.";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    resultadoTexto += `Raiz única: x = ${x}`;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultadoTexto += `Duas raízes reais:<br>x₁ = ${x1}<br>x₂ = ${x2}`;
  }

  resultadoDiv.innerHTML = resultadoTexto;
}
