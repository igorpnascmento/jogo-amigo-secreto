let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById ('amigo');
    let valor = input.value.trim();

    if (!valor) {
        alert('Preencha o campo com um nome válido!');
        return;
    }
    if (amigos.includes(valor)){
        alert('Este nome já foi adicionado!');
        return;
    }
        amigos.push(valor);
        atualizarLista();
        input.value = '';
        limaparLista();
}


function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert('Todos os amigos foram sorteados!');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]
    amigos.splice(indiceSorteado, 1);
    document.getElementById ('resultado').textContent = `O amigo sorteado foi ${amigoSorteado}!`;
    atualizarLista();
}

function limaparLista() {
    if (amigos.length == 1){
        document.getElementById('resultado').textContent = '';
    }
}