function buscar() {

let section = document.getElementById ("resultados-pesquisa");
console.log(section);

let campoPesquisa = document.getElementById ("campo-pesquisa").value;


if (campoPesquisa == "")
    {
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
let resultados = "";
let titulo = "";

for (let dado of dados) {
 titulo = dado.titulo.toLowerCase()
    
if (titulo.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
                      <h2>
                          <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element" target="_blank">${dado.titulo}</a>
                      </h2>
                      <p class="descricao-meta">${dado.descricao}</p>
                      <a href="${dado.link}" target="_blank"></a>
                  </div>
  `
}
section.innerHTML = resultados

};
}