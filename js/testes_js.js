var teste = []
teste.push(prompt("Insira o Título da Obra (Em Maiúsculo):"));
teste.push(prompt("Insira o Local de Publicação:"));
teste.push(prompt("Insira a Editora:"));
teste.push(prompt("Insira o Ano de Publicação:"));
document.getElementById("input1").value = (`${teste[0]}, ${teste[1]}: ${teste[2]}, ${teste[3]}.`) ;

//(`${teste[0]}, ${teste[1]}: ${teste[2]}, ${teste[3]}.`)

/*var btn = document.getElementById('btn-div');
        var container = document.getElementById('input1');

        btn.addEventListener('click', function() {
        
        if(container.style.display === 'block') {
        container.style.display = 'none';
        } else {
        container.style.display = 'block';
        }
        });*/