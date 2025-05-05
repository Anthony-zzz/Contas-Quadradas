document.getElementById('gerar').addEventListener('click', function() {
  const senha = gerarSenha();
  document.getElementById('senha').value = senha;
  document.getElementById('resultado').textContent = senha;
});

function gerarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let senha = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }
  return senha;
}
