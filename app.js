let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio!");
        return;
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let sorteio = [...listaAmigos];
    let embaralhado = [];
    
    while (sorteio.length > 0) {
        let indice = Math.floor(Math.random() * sorteio.length);
        let escolhido = sorteio.splice(indice, 1)[0];
        embaralhado.push(escolhido);
    }
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo1 = listaAmigos[i];
        let amigo2 = embaralhado[i];
        
        if (amigo1 === amigo2) {
            sortearAmigo();
            return;
        }
    }
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${listaAmigos[i]} tirou ${embaralhado[i]}`;
        resultado.appendChild(li);
    }
}
