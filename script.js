function createList(list){

    for(i = 0; i < list.length; i++){
        
        let lista = list[i];
        
        let listaItens = document.querySelector('.listaTarefas')
        

        if(lista.tipo == "Normal"){
            
            let itens = document.createElement('li');
            
            itens.classList = 'tarefas green';
            itens.innerText = lista.titulo;
            listaItens.appendChild(itens);
    }
        if(lista.tipo == "Urgente"){
            
            let itens = document.createElement('li');
            
            itens.classList = 'tarefas red';
            itens.innerText = lista.titulo;
            listaItens.appendChild(itens);
        }if(lista.tipo == "Prioritário"){
            
            let itens = document.createElement('li');
            
            itens.classList = 'tarefas yellow';
            itens.innerText = lista.titulo;
            listaItens.appendChild(itens)
    }
}
}createList(tarefas);

// função para remover;
let listaDeItens = document.querySelector('.listaTarefas')
console.log(listaDeItens)
listaDeItens.addEventListener( 'click', function( e ) {
    // e.target é o elemento (li) clicado
    if ( e.target && e.target.classList.contains( 'tarefas' ) ) {
        console.log( e.target.textContent ); //Mostra o texto da li clicada
      this.removeChild(e.target); //Apaga o filho
    }
}, false);
