const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = res.jason()
  console. log(dados);
  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = 'Você sabia que o mundo tem ${dados.total_pessoas__mundo} de pessoas e que aproximadamente $pessoas estão conectadas em alguma rede social e passa em media'{dados.tempo_medio} horas conectadas
console. log(paragrafo)

const container =document.getElementById('graficos-container')
container.appendChild(paragrafo)

}


vizualizarInformacoesGlobais()