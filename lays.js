const pergunta1 = document.getElementById('pergunta1');
const botaos1 = document.getElementById('sim1');
const botaon1 = document.getElementById('nao1');
const height = window.innerHeight - 50;
const width = window.innerWidth - 50;
const pergunta2 = document.getElementById('pergunta2');
const botaos2 = document.getElementById('sim2');
const botaon2 = document.getElementById('nao2');
const fazdedoida = document.getElementById('fazdedoida');
const meuamor = document.getElementById('meuamor');

botaos1.addEventListener('click', function() {
  pergunta1.style.display = 'none';
  pergunta2.style.display = 'block';
})

botaon1.addEventListener('mouseover', function() {
  botaon1.style.position = 'absolute';
  botaon1.style.top = Math.random() * height + 'px';
  botaon1.style.left = Math.random() * width + 'px';
});

botaos2.addEventListener('click', function() {
  pergunta2.style.display = 'none';
  meuamor.style.display = 'block';
  fazdedoida.style.display = 'none';
})

botaon2.addEventListener('click', function() {
  fazdedoida.style.display = 'block';
})