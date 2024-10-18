const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
const res = await fetch(url)
const dados = await res.json()
console.log(dados)
}
vizualizarInformacoesGlobais()