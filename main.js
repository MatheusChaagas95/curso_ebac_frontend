$(document).ready(function() {
    
    const $novaTarefa = $('#nova-tarefa');
    const $adicionarTarefa = $('#adicionar-tarefa');
    const $listaTarefa = $('#lista-tarefas');
    const $cancelarTarefa = $('#cancelar-tarefa')
    
    $adicionarTarefa.click(function() {
        const novaTarefa = $novaTarefa.val();
        $listaTarefa.append(`<li>${novaTarefa}</li>`);
        $novaTarefa.val('');
    });
    
    $listaTarefa.on('click', 'li', function() {
        
        $($listaTarefa).addClass('concluido');
    });

    $cancelarTarefa.click(function() {
        $('#lista-tarefas').remove();
    })
});
