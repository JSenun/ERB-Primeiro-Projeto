
function livroAutorClick(){

    var livroAutor = [];

    livroAutor.push(prompt("Insira o Sobrenome do Autor:"));
    livroAutor.push(prompt("Insira o Nome do Autor:"));
    livroAutor.push(prompt("Insira o Título da Obra"));
    livroAutor.push(prompt("Insira a Edição da Obra:"));
    livroAutor.push(prompt("Insira o Local de Publicação:"));
    livroAutor.push(prompt("Insira a Editora:"));
    livroAutor.push(prompt("Insira o Ano de Publicação:"));
    document.getElementById("result").value = (`${livroAutor[0].toUpperCase()}, ${livroAutor[1]}. ${livroAutor[2].toUpperCase()}: ${livroAutor[3]}. ${livroAutor[4]}: ${livroAutor[5]}, ${livroAutor[6]}.`);

}

function livroSemAutorClick(){

    var livroSemAutor = [];

    livroSemAutor.push(prompt("Insira o Título da Obra:"));
    livroSemAutor.push(prompt("Insira o Local de Publicação:"));
    livroSemAutor.push(prompt("Insira a Editora:"));
    livroSemAutor.push(prompt("Insira o Ano de Publicação:"));
    document.getElementById("result").value = (`${livroSemAutor[0].toUpperCase()}, ${livroSemAutor[1]}: ${livroSemAutor[2]}, ${livroSemAutor[3]}.`) ;

}

function artigoRevistaClick(){

    var artigoRevista = [];

    artigoRevista.push(prompt("Insira o Sobrenome do Autor:"));
    artigoRevista.push(prompt("Insira o Nome do Autor:"));
    artigoRevista.push(prompt("Insira o Título do Artigo:"));
    artigoRevista.push(prompt("Insira o Nome da Revista:"));
    artigoRevista.push(prompt("Insira o Local de Publicação:"));
    artigoRevista.push(prompt("Insira o número do volume da Revista:"));
    artigoRevista.push(prompt("Insira as páginas(Inicial-Final):  EX: 41-60"));
    artigoRevista.push(prompt("Insira o Ano de Publicação:"));
    document.getElementById("result").value = (`${artigoRevista[0].toUpperCase()}, ${artigoRevista[1]}. ${artigoRevista[2]}. ${artigoRevista[3].toUpperCase()}, ${artigoRevista[4]}, ${artigoRevista[5]}, ${artigoRevista[6]}, ${artigoRevista[7]}.`);
}

function artigoEventoClick(){

    var artigoEvento = [];

    artigoEvento.push(prompt("Insira o Sobrenome do Autor:"));
    artigoEvento.push(prompt("Insira o Nome do Autor:"));
    artigoEvento.push(prompt("Insira o Título da Obra:"));
    artigoEvento.push(prompt("Insira o Nome do Evento/Congresso:"));
    artigoEvento.push(prompt("Insira a Edição do Evento/Congresso: (Numerais Romanos Preferencialmente)"));
    artigoEvento.push(prompt("Insira o Ano do Evento:"));
    artigoEvento.push(prompt("Insira o Local onde está Acontecendo o Evento:"));
    artigoEvento.push(prompt("Insira o Tipo desse Documento: (Anais, Resumos e etc...)"));
    artigoEvento.push(prompt("Insira o Local de Publicação:"));
    artigoEvento.push(prompt("Insira a Editora:"));
    artigoEvento.push(prompt("Insira o Ano de Publicação:"));
    artigoEvento.push(prompt("Insira as páginas(Inicial-Final):  EX: 41-60"));
    document.getElementById("result").value = (`${artigoEvento[0].toUpperCase()}, ${artigoEvento[1]}. ${artigoEvento[2].toUpperCase()}. In: ${artigoEvento[3].toUpperCase()}, ${artigoEvento[4]}, ${artigoEvento[5]}, ${artigoEvento[6]}. ${artigoEvento[7]}. ${artigoEvento[8]}: ${artigoEvento[9]}, ${artigoEvento[10]}. ${artigoEvento[11]}.`);

}

function monografiaClick(){

    var monografia = [];

    monografia.push(prompt("Insira o Sobrenome do Autor:"));
    monografia.push(prompt("Insira o Nome do Autor:"));
    monografia.push(prompt("Insira o Título da Obra:"));
    monografia.push(prompt("Insira o ano da Apresentação:"));
    monografia.push(prompt("Insira o Número de Folhas do Documento:"));
    monografia.push(prompt("Insira a Categoria do Documento: (Tese, Monografia e Etc...)"));
    monografia.push(prompt("Insira a Instituição de Ensino:"));
    monografia.push(prompt("Insira o Local de Publicação:"));
    monografia.push(prompt("Insira o ano da Defesa do Documento:"));
    document.getElementById("result").value = (`${monografia[0].toUpperCase()}, ${monografia[1]}. ${monografia[2].toUpperCase()}. ${monografia[3]}. ${monografia[4]}. ${monografia[5]} - ${monografia[6]}, ${monografia[7]}, ${monografia[8]}.`);

}

function obrasColetivasClick(){

    var obrasColetivas = [];

    obrasColetivas.push(prompt("Insira o sobrenome Autor ou nome da Instituição Responsável:"));
    obrasColetivas.push(prompt("Insira o Nome do Autor ou nome da Instituição Responsável:"));
    obrasColetivas.push(prompt("Insira o Titulo:"));
    obrasColetivas.push(prompt("Insira o nome da Entidade:"));
    obrasColetivas.push(prompt("Insira o Ano de Publicação:"));
    document.getElementById("result").value = (`${obrasColetivas[0].toUpperCase()}, ${obrasColetivas[1]}. ${obrasColetivas[2].toUpperCase()}. ${obrasColetivas[3]}, ${obrasColetivas[4]}.`)

}

function sitesAutorClick(){

    var sitesAutor = [];

    sitesAutor.push(prompt("Insira o Sobrenome do Autor:"));
    sitesAutor.push(prompt("Insira o Nome do Autor:"));
    sitesAutor.push(prompt("Insira o Título do Artigo/Post:"));
    sitesAutor.push(prompt("Insira o Nome do Site:"));
    sitesAutor.push(prompt("Insira o Ano de Publicação:"));
    sitesAutor.push(prompt("Insira o URL do Site:"));
    sitesAutor.push(prompt("Insira a Data de Acesso ao Site: EX: DD/MM/AAAA"));
    document.getElementById("result").value = (`${sitesAutor[0].toUpperCase()}, ${sitesAutor[1]}. ${sitesAutor[2]}. ${sitesAutor[3].toUpperCase()}, ${sitesAutor[4]}. Disponível em: ${sitesAutor[5]}. Acesso em: ${sitesAutor[6]}.`);

}

function sitesSemAutorClick(){ 

    var sitesSemAutor = [];

    sitesSemAutor.push(prompt("Insira o Título do Artigo/Post:"));
    sitesSemAutor.push(prompt("Insira o Nome do Site:"));
    sitesSemAutor.push(prompt("Insira o Ano de Publicação:"));
    sitesSemAutor.push(prompt("Insira o URL do Site:"));
    sitesSemAutor.push(prompt("Insira a Data de Acesso ao Site: EX: DD/MM/AAAA"));
    document.getElementById("result").value = (`${sitesSemAutor[0].toUpperCase()}, ${sitesSemAutor[1].toUpperCase()}, ${sitesSemAutor[2]}. Disponível em: ${sitesSemAutor[3]}. Acesso em: ${sitesSemAutor[4]}.`);

}

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");


button1.onclick = livroAutorClick;
button2.onclick = livroSemAutorClick;
button3.onclick = artigoRevistaClick;
button4.onclick = artigoEventoClick;
button5.onclick = monografiaClick;
button6.onclick = obrasColetivasClick;
button7.onclick = sitesAutorClick;
button8.onclick = sitesSemAutorClick;

function copiar() { //Função que copia o conteúdo do Input ao clicar no botão. 

    var copyText = document.getElementById("result");
  
    copyText.select();
  
    document.execCommand("copy");
  
    alert("Texto Copiado: " + copyText.value);
  }